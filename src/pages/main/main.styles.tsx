import styled from 'styled-components'

export const MainPageContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #DCECE0;
`

export const TodosBlock = styled.div`
    max-width: 700px;
    width: 100%;
    padding: 20px;
    border-radius: 15px;
    background-color: #666680;
    box-shadow: 2px 0 0 0 #666680;
`

export const TodosHeader = styled.div`
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 600;
`