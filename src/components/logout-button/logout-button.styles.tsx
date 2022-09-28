import styled from 'styled-components'

import { lightColor } from '../../styles'

export const LogoutButtonHeader = styled.button`
    border: none;
    width: 40px;
    height: 40px;
    background-color: ${lightColor};
    transition: 0.5s;
    cursor: pointer;
    font-size: 1.2rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 20px;
    right: 20px;

    &:hover {
        transition: 0.5s;
        background-color: #dbe4f2;
    }
`

export const LogoutImage = styled.img`
    width: 25px;
    height: 25px;
`