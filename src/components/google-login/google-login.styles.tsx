import styled from 'styled-components'

import { authButtonBackground, todosBackground, authButtonBackgroundHover } from '../../styles'

export const GoogleLoginButton = styled.button`
    min-width: 200px;
    height: 40px;
    background-color: ${authButtonBackground};
    display: flex;
    align-items: center;
    border: none;
    transition: 0.5s;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 20px;
    color: ${todosBackground};

    &:hover {
        transition: 0.5s;
        background-color: ${authButtonBackgroundHover};
    }
`

export const GoogleIcon = styled.img`
    width: 30px;
    height: 30px;
`

export const GoogleButtonText = styled.span`
    margin-left: 10px;
    font-size: 1.2rem;
    font-weight: 500;
`