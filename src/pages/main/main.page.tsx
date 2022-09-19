import { useState, useEffect, ChangeEvent } from 'react' 
import { v4 as uuidv4 } from 'uuid';

import { Todo } from '../../types/types';

import TodoItem from '../../components/todo-item/todo-item.component'

import { ButtonCreateTodo, CreateTodoBlock, DateBlock, MainPageContainer, TodoInputCreate, TodosBlock, TodosBody, TodosHeader } from './main.styles'

const MainPage = () => {
    const [currentDate, setCurrentDate] = useState('')
    const [inputTodo, setInputTodo] = useState('')
    const [todoList, setTodoList] = useState<Todo[]>([])

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

    const updateStatus = (id: string, status: string): void => {
        let localStorageTodos: Todo[] = []

        try {
            const currentTodos = JSON.parse(localStorage.getItem('todos') || "")
            const updatedTodos = currentTodos.map((todo: Todo) => todo.id === id ? {...todo, status} : todo)
            localStorageTodos = [...updatedTodos]
        } catch (e) {}

        console.log(localStorageTodos)

        localStorage.setItem('todos', JSON.stringify(localStorageTodos))
        setTodoList(JSON.parse(localStorage.getItem('todos') || ""))
    }
 
    const todoInputHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        setInputTodo(event.currentTarget.value)
    } 

    const createTodoHandler = (): void => {
        let localStorageTodos: Todo[] = []

        try {
            const currentTodos = JSON.parse(localStorage.getItem('todos') || "")
            localStorageTodos = [...currentTodos]
        } catch (e) {}

        const todoObject = {
            id: uuidv4(),
            text: inputTodo,
            status: 'active',
        }

        const newTodosList = [...localStorageTodos, todoObject]
        localStorage.setItem('todos', JSON.stringify(newTodosList))

        setTodoList(JSON.parse(localStorage.getItem('todos') || ""))
        setInputTodo('')
    }
 
    useEffect(() => {
        let localStorageTodos: Todo[] = []
        let today = new Date().toLocaleDateString()
        
        try {
            const currentTodos = JSON.parse(localStorage.getItem('todos') || "")
            localStorageTodos = [...currentTodos]
        } catch (e) {}
        
        setCurrentDate(today)
        setTodoList(localStorageTodos)
    }, [])

    return (
        <MainPageContainer>
            <TodosBlock>
                <TodosHeader>
                    Current Date <DateBlock>{currentDate}</DateBlock>
                </TodosHeader>
                <TodosBody>
                    <CreateTodoBlock>
                        <TodoInputCreate type='text' value={inputTodo} onChange={todoInputHandler} />
                        <ButtonCreateTodo onClick={createTodoHandler}>Create</ButtonCreateTodo>
                    </CreateTodoBlock>
                    {
                        todoList.slice().reverse().map((todo: Todo) => (
                            <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} updateStatus={updateStatus} />
                        ))
                    }
                </TodosBody>
            </TodosBlock>
        </MainPageContainer>
    )
}

export default MainPage