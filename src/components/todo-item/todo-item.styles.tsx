import styled from 'styled-components'

import { textColor } from '../../styles'

export const TodoContainer = styled.section`
    padding: 20px 10px 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const TextTodo = styled.div`
    color: ${textColor};
    font-size: 1.1rem;
    margin-right: 20px;

    &.done {
        text-decoration: line-through;
    }
`

export const BlockImagesTodo = styled.div`
    display: flex;
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
    width: 20px;
    height: 20px;
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