import styled from 'styled-components'

import { whiteTextColor } from '../../styles'

export const TodoContainer = styled.section`
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
`

export const TextTodo = styled.div`
    color: ${whiteTextColor};
    font-size: 1.1rem;

    &.done {
        text-decoration: line-through;
    }
`

export const BlockImagesTodo = styled.div`
    display: flex;
`

export const DeleteImageTodo = styled.img`
    filter: invert(99%) sepia(1%) saturate(5827%) hue-rotate(267deg) brightness(127%) contrast(80%);
    width: 20px;
    height: 20px;
    cursor: pointer;

    &:hover {
        filter: invert(87%) sepia(15%) saturate(204%) hue-rotate(210deg) brightness(104%) contrast(98%);
    }
`

export const DoneImageTodo = styled.img`
    filter: invert(99%) sepia(1%) saturate(5827%) hue-rotate(267deg) brightness(127%) contrast(80%);
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-right: 5px;
    
    &:hover {
        filter: invert(87%) sepia(15%) saturate(204%) hue-rotate(210deg) brightness(104%) contrast(98%);
    }
`

export const ResetImageTodo = styled.img`
    filter: invert(99%) sepia(1%) saturate(5827%) hue-rotate(267deg) brightness(127%) contrast(80%);
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-right: 5px;
    
    &:hover {
        filter: invert(87%) sepia(15%) saturate(204%) hue-rotate(210deg) brightness(104%) contrast(98%);
    }
`