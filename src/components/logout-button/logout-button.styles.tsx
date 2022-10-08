import styled from 'styled-components'

import { authButtonBackgroundHover, authButtonBackground } from '../../styles'

export const LogoutButtonHeader = styled.button`
    border: none;
    width: 40px;
    height: 40px;
    background-color: ${authButtonBackground};
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
        background-color: ${authButtonBackgroundHover};
    }
`

export const LogoutImage = styled.img`
    width: 25px;
    height: 25px;
    filter: invert(100%) sepia(1%) saturate(1358%) hue-rotate(186deg) brightness(122%) contrast(100%);
`

export const LogoutButtonWrapper = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: end;
`