import styled from 'styled-components'
import { lightColor } from '../../styles'

export const HeaderContainer = styled.header`
    width: 100%;
    background-color: #002965;
    color: ${lightColor};
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    align-items: center;
`

export const HeaderText = styled.span`
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
    color: ${lightColor};
    margin-left: 20px;
`

export const UserName = styled.span`
    font-size: 1.5rem;
    font-weight: 500;
    margin-right: 20px;
`

export const LogginedUserBlockHeader = styled.section`
    display: flex;
    align-items: center;
`