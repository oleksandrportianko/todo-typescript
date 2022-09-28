import styled from 'styled-components'
import { todosBackground } from '../../styles'

export const HeaderContainer = styled.header`
    width: 100%;
    background-color: #0B2346;
    color: ${todosBackground};
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    align-items: center;
`

export const HeaderText = styled.span`
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
    color: ${todosBackground};
    margin-left: 20px;
`

export const UserName = styled.span`
    font-size: 1.2rem;
    font-weight: 500;
    margin-right: 20px;
`