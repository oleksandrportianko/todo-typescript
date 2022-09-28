import { useState, useEffect, ChangeEvent, KeyboardEvent } from 'react' 
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { selectUserData } from '../../redux/slices/user.slice';
import { addNewTodo, getTodoList } from '../../utils/firebase/firebase';
import { Todo, DateObject } from '../../types/types';

import TodoItem from '../../components/todo-item/todo-item.component'

import plusSvg from '../../assets/plus.svg'

import { ButtonCreateTodoImage, ClearAllButton, CountOfTasks, CreateTodoBlock, DateBlock, 
    EmptyTasksText, HeaderAdditionalInfo, HeaderDateBlock, MainPageContainer, MonthBlock, TodayDateBlock, TodoInputCreate, 
    TodosBlock, TodosBody, TodosHeader, TodosListWrapper, WeekDayBlock } from './main.styles'

const MainPage = () => {
    const userData = useSelector(selectUserData)
    const [currentDate, setCurrentDate] = useState<DateObject>({day: '', month: '', weekDay: ''})
    const [editElement, setEditElement] = useState('')
    const [inputTodo, setInputTodo] = useState('')
    const [todoList, setTodoList] = useState<Todo[]>([])

    // handle create todo after click on Enter
    const handleKeyDown = (event: KeyboardEvent<HTMLImageElement>): void => {
        if (event.key === 'Enter') {
            createTodoHandler()
        }
    }

    // Function saved updated todo into localStorage
    const saveEditedElement = (id: string, text: string): void => {
        let localStorageTodos: Todo[] = []

        try {
            const currentTodos = JSON.parse(localStorage.getItem('todos') || "")
            const newTodos = currentTodos.map((todo: Todo) => todo.id === id ? {...todo, text} : todo)
            localStorageTodos = [...newTodos]
        } catch (e) {}

        localStorage.setItem('todos', JSON.stringify(localStorageTodos))
        setTodoList(JSON.parse(localStorage.getItem('todos') || ""))
        setEditElement('')
    }  

    // Set id of editable element
    const setEditElementHandler = (id: string): void => {
        setEditElement(id)
    }

    // Function used for remvoe all todos list
    const clearAllTodos = (): void => {
        let localStorageTodos: Todo[] = []

        localStorage.setItem('todos', JSON.stringify(localStorageTodos))
        setTodoList(JSON.parse(localStorage.getItem('todos') || ""))
    }

    // Function used for delete separate todo
    const deleteTodo = (id: string): void => {
        let localStorageTodos: Todo[] = []

        try {
            const currentTodos = JSON.parse(localStorage.getItem('todos') || "")
            const filteredTodos = currentTodos.filter((todo: Todo) => todo.id !== id)
            localStorageTodos = [...filteredTodos]
        } catch (e) {}

        localStorage.setItem('todos', JSON.stringify(localStorageTodos))
        setTodoList(JSON.parse(localStorage.getItem('todos') || ""))
    }

    // Function used for update status of todo
    const updateStatus = (id: string, status: string): void => {
        let localStorageTodos: Todo[] = []

        try {
            const currentTodos = JSON.parse(localStorage.getItem('todos') || "")
            const updatedTodos = currentTodos.map((todo: Todo) => todo.id === id ? {...todo, status} : todo)
            localStorageTodos = [...updatedTodos]
        } catch (e) {}

        localStorage.setItem('todos', JSON.stringify(localStorageTodos))
        setTodoList(JSON.parse(localStorage.getItem('todos') || ""))
    }
 
    // Handle input for new todos
    const todoInputHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        setInputTodo(event.currentTarget.value)
    } 

    // Create new todo function
    const createTodoHandler = (): void => {
        const todoObject = {
            id: uuidv4(),
            text: inputTodo,
            status: 'active',
        }

        if (inputTodo.length > 0) {
            addNewTodo(userData.id, todoObject)
        }
    }
 
    // useEffect used for set data information at the beginning
    // also set existing todos after extracting from firebase doc
    useEffect(() => {
        const day = new Date().toLocaleDateString().split('/')[1]
        const month = new Date().toLocaleString('default', { month: 'long' })
        const weekDay = new Date().toLocaleString('en-us', {  weekday: 'long' })

        const getTodos = async () => {
            const res = await getTodoList(userData.id)
            if (res) {
                setTodoList(res)
            }
        } 

        if (userData.id) {
            getTodos()
        }
        
        setCurrentDate({
            day: day,
            month: month,
            weekDay: weekDay,
        })
    }, [userData])

    return (
        <MainPageContainer>
            <TodosBlock>
                <TodosHeader>
                    <HeaderDateBlock>
                        <TodayDateBlock>
                            <WeekDayBlock>{currentDate.weekDay},</WeekDayBlock>
                            <DateBlock>{currentDate.day}th</DateBlock>
                        </TodayDateBlock>
                        <MonthBlock>{currentDate.month}</MonthBlock>
                    </HeaderDateBlock>
                    <HeaderAdditionalInfo>
                        <CountOfTasks>{(todoList.length === 0 || todoList.length === 1) ? `${todoList.length} task` : `${todoList.length} tasks`}</CountOfTasks>
                        <ClearAllButton onClick={clearAllTodos}>Clear list</ClearAllButton>
                    </HeaderAdditionalInfo>
                </TodosHeader>
                <TodosBody>
                    <CreateTodoBlock onKeyDown={handleKeyDown}>
                        <ButtonCreateTodoImage src={plusSvg} onClick={createTodoHandler} />
                        <TodoInputCreate placeholder='Type your task' type='text' value={inputTodo} onChange={todoInputHandler} />
                    </CreateTodoBlock>
                    <TodosListWrapper>
                        {
                            todoList.length > 0 ?
                            <>
                                {
                                    todoList.slice().reverse().map((todo: Todo) => (
                                        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} updateStatus={updateStatus} editElement={editElement} saveEditedElement={saveEditedElement} setEditElementHandler={setEditElementHandler} />
                                    ))
                                }
                            </> :
                            <EmptyTasksText>
                                You don`t have tasks yet!
                            </EmptyTasksText>
                        }
                    </TodosListWrapper>
                </TodosBody>
            </TodosBlock>
        </MainPageContainer>
    )
}

export default MainPage