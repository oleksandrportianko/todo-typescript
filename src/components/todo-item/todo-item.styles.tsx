import styled from 'styled-components'

import { textColor } from '../../styles'

export const TodoContainer = styled.section`
    padding: 20px 10px 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const TextTodoWrapper = styled.div`
    width: 100%;
    margin-right: 20px;
`

export const BlockImagesTodo = styled.div`
    display: flex;
    align-items: center;
`

export const DeleteImageTodo = styled.img`
    filter: invert(31%) sepia(20%) saturate(570%) hue-rotate(156deg) brightness(94%) contrast(86%);
    width: 20px;
    height: 20px;
    cursor: pointer;

    &:hover {
        filter: invert(29%) sepia(4%) saturate(2365%) hue-rotate(159deg) brightness(92%) contrast(93%);
    }
`

export const DoneImageTodo = styled.img`
    filter: invert(31%) sepia(20%) saturate(570%) hue-rotate(156deg) brightness(94%) contrast(86%);
    width: 18px;
    height: 18px;
    cursor: pointer;
    margin-right: 5px;
    
    &:hover {
        filter: invert(29%) sepia(4%) saturate(2365%) hue-rotate(159deg) brightness(92%) contrast(93%);
    }
`

export const ResetImageTodo = styled.img`
    filter: invert(31%) sepia(20%) saturate(570%) hue-rotate(156deg) brightness(94%) contrast(86%);
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-right: 5px;
    
    &:hover {
        filter: invert(29%) sepia(4%) saturate(2365%) hue-rotate(159deg) brightness(92%) contrast(93%);
    }
`

export const EditImageTodo = styled.img`
    filter: invert(31%) sepia(20%) saturate(570%) hue-rotate(156deg) brightness(94%) contrast(86%);
    width: 20px;
    height: 20px;
    cursor: pointer;
    
    &:hover {
        filter: invert(29%) sepia(4%) saturate(2365%) hue-rotate(159deg) brightness(92%) contrast(93%);
    }
`

export const EditInput = styled.input`
    color: ${textColor};
    font-size: 1.1rem;
    border: none;
    background-color: transparent;
    padding: 0;
    height: 21px;
    width: 100%;

    &:focus-visible {
        outline: none;
    }
`

export const TodoTextBlock = styled.div`
    color: ${textColor};
    font-size: 1.1rem;;

    &.done {
        text-decoration: line-through;
    }
`