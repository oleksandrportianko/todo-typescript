import { useState, useEffect, ChangeEvent, KeyboardEvent } from 'react'
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { selectUserData } from '../../redux/slices/user.slice';
import { addNewTodo, deleteTodoById, getTodoList, removeAllTodos, updateTodoStatus, updateTodoText } from '../../utils/firebase/firebase';
import { Todo, DateObject } from '../../types/types';

import TodoItem from '../../components/todo-item/todo-item.component'
import GoogleLogin from '../../components/google-login/google-login.component';
import LogoutButton from '../../components/logout-button/logout-button.component';

import loaderGif from '../../assets/loader.gif'
import plusSvg from '../../assets/plus.svg'

import {
    ButtonCreateTodoImage, ClearAllButton, CountOfTasks, CreateTodoBlock, DateBlock, LoginBlock,
    EmptyTasksText, HeaderAdditionalInfo, HeaderDateBlock, LoaderGif, MainPageContainer, MonthBlock, TodayDateBlock, TodoInputCreate,
    TodosBlock, TodosBody, TodosHeader, TodosListWrapper, WeekDayBlock, LoaderWrapper, PleaseLoginText
} from './main.styles'

const MainPage = () => {
    const userData = useSelector(selectUserData)
    const [currentDate, setCurrentDate] = useState<DateObject>({ day: '', month: '', weekDay: '' })
    const [editElement, setEditElement] = useState<string>('')
    const [inputTodo, setInputTodo] = useState<string>('')
    const [todoList, setTodoList] = useState<Todo[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    // Function that`s handle status of isLoading state
    const handleIsLoadingStatus = (status: boolean): void => {
        setIsLoading(status)
    }

    // handle key enter when user update todo text
    const handleKeyDownOnUpdate = (id: string, text: string): void => {
        saveEditedElement(id, text)
    }

    // handle create todo after click on Enter
    const handleKeyDown = (event: KeyboardEvent<HTMLImageElement>): void => {
        if (event.key === 'Enter') {
            createTodoHandler()
        }
    }

    // Function saved updated todo into localStorage
    const saveEditedElement = async (id: string, text: string): Promise<void> => {
        handleIsLoadingStatus(true)

        await updateTodoText(userData.id, id, text)
        setEditElement('')

        const res = await getTodoList(userData.id)
        if (res) {
            setTodoList(res)
        }

        handleIsLoadingStatus(false)
    }

    // Set id of editable element
    const setEditElementHandler = (id: string): void => {
        setEditElement(id)
    }

    // Function used for remove all todos list
    const clearAllTodos = async (): Promise<void> => {
        handleIsLoadingStatus(true)

        await removeAllTodos(userData.id)

        const res = await getTodoList(userData.id)
        if (res) {
            setTodoList(res)
        }

        handleIsLoadingStatus(false)
    }

    // Function used for delete separate todo
    const deleteTodo = async (id: string): Promise<void> => {
        handleIsLoadingStatus(true)

        await deleteTodoById(userData.id, id)

        const res = await getTodoList(userData.id)
        if (res) {
            setTodoList(res)
        }

        handleIsLoadingStatus(false)
    }

    // Function used for update status of todo
    const updateStatus = async (id: string, status: string): Promise<void> => {
        handleIsLoadingStatus(true)

        await updateTodoStatus(userData.id, id, status)

        const res = await getTodoList(userData.id)
        if (res) {
            setTodoList(res)
        }

        handleIsLoadingStatus(false)
    }

    // Handle input for new todos
    const todoInputHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        setInputTodo(event.currentTarget.value)
    }

    // Create new todo function
    const createTodoHandler = async (): Promise<void> => {
        const todoObject = {
            id: uuidv4(),
            text: inputTodo,
            status: 'active',
        }

        if (inputTodo.length > 0) {
            handleIsLoadingStatus(true)
            await addNewTodo(userData.id, todoObject)
            setInputTodo('')

            const res = await getTodoList(userData.id)
            if (res) {
                setTodoList(res)
            }
            handleIsLoadingStatus(false)
        }
    }

    // useEffect used for set data information at the beginning
    // also set existing todos after extracting from firebase doc
    useEffect(() => {
        const day = new Date().toLocaleDateString().split('/')[1]
        const month = new Date().toLocaleString('default', { month: 'long' })
        const weekDay = new Date().toLocaleString('en-us', { weekday: 'long' })


        const getTodos = async () => {
            handleIsLoadingStatus(true)

            const res = await getTodoList(userData.id)
            if (res) {
                setTodoList(res)
            }

            handleIsLoadingStatus(false)
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
            {userData.id && <LogoutButton />}
            {
                !userData.id
                    ? (<LoginBlock>
                        <PleaseLoginText>
                            Please login to manage your tasks
                        </PleaseLoginText>
                        <GoogleLogin />
                    </LoginBlock>)
                    : (<TodosBlock>
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
                            {
                                isLoading
                                    ? (<LoaderWrapper>
                                        <LoaderGif src={loaderGif} />
                                    </LoaderWrapper>)
                                    : (<TodosListWrapper>
                                        {
                                            todoList.length > 0 ?
                                                <>
                                                    {
                                                        todoList.slice().reverse().map((todo: Todo) => (
                                                            <TodoItem key={todo.id} todo={todo} handleKeyDownOnUpdate={handleKeyDownOnUpdate} deleteTodo={deleteTodo} updateStatus={updateStatus} editElement={editElement} saveEditedElement={saveEditedElement} setEditElementHandler={setEditElementHandler} />
                                                        ))
                                                    }
                                                </> :
                                                <EmptyTasksText>
                                                    You don`t have tasks yet!
                                                </EmptyTasksText>
                                        }
                                    </TodosListWrapper>)
                            }
                        </TodosBody>
                    </TodosBlock>)
            }
        </MainPageContainer>
    )
}

export default MainPage