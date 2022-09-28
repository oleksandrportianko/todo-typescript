import styled from 'styled-components'

import { appBackground, todosBackground, textColor, underlineColor, lightColor, redColor } from '../../styles'

export const MainPageContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${appBackground};
`

export const TodosBlock = styled.section`
    max-width: 400px;
    min-height: 550px;
    max-height: 550px;
    width: 100%;
    border-radius: 15px;
    background-color: ${todosBackground};
    box-shadow: 0px 0px 10px 10px #14147e21;
`

export const TodosHeader = styled.header`
    font-size: 1.2rem;
    font-weight: 600;
    color: ${appBackground};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 2px solid ${underlineColor};
`

export const HeaderDateBlock = styled.div`
    display: flex;
    flex-direction: column;
`

export const HeaderAdditionalInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

export const TodayDateBlock = styled.div`
    display: flex;
`

export const WeekDayBlock = styled.span`
    color: ${appBackground};
`

export const DateBlock = styled.span`
    color: ${appBackground};
    margin-left: 5px;
`

export const MonthBlock = styled.div`
    color: ${lightColor};
    font-size: 1rem;
`

export const TodosBody = styled.main`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 15px;
`

export const CreateTodoBlock = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    border-bottom: 2px solid ${underlineColor};
    cursor: pointer;
`

export const TodoInputCreate = styled.input`
    background-color: transparent;
    border: none;
    min-width: 200px;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    color: ${textColor};
    font-size: 1.1rem;

    &::placeholder {
        color: ${lightColor}
    }

    &:focus-visible {
        outline: none; 
    }
`

export const ButtonCreateTodoImage = styled.img`
    filter: invert(78%) sepia(7%) saturate(516%) hue-rotate(142deg) brightness(92%) contrast(87%);
    width: 25px;
    height: 25px;
    margin-right: 10px;
`

export const CountOfTasks = styled.span`
    color: ${lightColor};
    font-size: 1rem;
`

export const ClearAllButton = styled.button`
    width: 90px;
    height: 25px;
    background-color: ${redColor};
    border-radius: 5px;
    border: none;
    color: ${todosBackground};
    text-transform: uppercase;
    font-size: 0.7rem;
    margin-top: 5px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        background-color: #d32d2d;
    }
`

export const EmptyTasksText = styled.div`
    width: 100%;
    min-height: calc(500px - 170px);
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${lightColor};
`

export const TodosListWrapper = styled.div`
    max-height: 354px;
    overflow-y: scroll;
    padding: 0 0 20px 0;

    ::-webkit-scrollbar {
        width: 3px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${lightColor};
    }

    ::-webkit-scrollbar-thumb:hover {
        background: transparent;
    }
`

export const LoaderWrapper = styled.div`
    max-height: 354px;
    padding: 0 0 20px 0;
    min-height: 354px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const LoaderGif = styled.img`
    height: 80px;
`

export const LoginBlock = styled.div`
    max-width: 400px;
    min-height: 550px;
    max-height: 550px;
    width: 100%;
    border-radius: 15px;
    background-color: ${todosBackground};
    box-shadow: 0px 0px 10px 10px #14147e21;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const PleaseLoginText = styled.span`
    font-size: 1.2rem;
    text-align: center;
`