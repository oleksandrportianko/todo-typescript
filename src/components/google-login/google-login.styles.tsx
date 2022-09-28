import styled from 'styled-components'

export const GoogleLoginButton = styled.button`
    min-width: 200px;
    height: 40px;
    background-color: white;
    margin-right: 20px;
    display: flex;
    align-items: center;
    border: none;
    transition: 0.5s;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
        transition: 0.5s;
        background-color: #dbe4f2;
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