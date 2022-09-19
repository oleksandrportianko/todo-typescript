import styled from 'styled-components'

import { lightPurpleColor, darkPurpleColor, whiteTextColor, orangeColor } from '../../styles'

export const MainPageContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${lightPurpleColor};
`

export const TodosBlock = styled.section`
    max-width: 600px;
    min-height: 500px;
    width: 100%;
    padding: 20px;
    border-radius: 15px;
    background-color: ${darkPurpleColor};
`

export const TodosHeader = styled.header`
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 600;
    color: ${whiteTextColor};
    display: flex;
    justify-content: space-between;
    padding: 0 0 10px 0;
    border-bottom: 2px solid ${whiteTextColor}
`

export const DateBlock = styled.span`
    color: ${orangeColor}
`

export const TodosBody = styled.main`
    display: flex;
    flex-direction: column;
`

export const CreateTodoBlock = styled.div`
    display: flex;
    margin-top: 20px;
`

export const TodoInputCreate = styled.input`
    background-color: transparent;
    border: none;
    min-width: 200px;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border: 1px solid ${whiteTextColor};
    color: ${whiteTextColor};
    font-size: 1.1rem;

    &:focus-visible {
        outline: none; 
    }
`

export const ButtonCreateTodo = styled.button`
    min-width: 100px;
    height: 42px;
    border: none;
    margin-left: 10px;
    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;
    
    &:hover {
        background-color: #efe7e7;
    }
`