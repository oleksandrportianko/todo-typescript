import { useSelector } from 'react-redux';

import GoogleLogin from '../../components/google-login/google-login.component';
import LogoutButton from '../logout-button/logout-button.component';

import { selectUserData } from '../../redux/slices/user.slice';

import { HeaderContainer, HeaderText, UserName, LogginedUserBlockHeader } from './header.styles'

const Header = () => {
    const userData = useSelector(selectUserData)

    return (
        <HeaderContainer>
            <HeaderText>TODO List</HeaderText>
            {userData.displayName
                ? (
                    <LogginedUserBlockHeader>
                        <UserName>{userData.displayName}</UserName>
                        <LogoutButton />
                    </LogginedUserBlockHeader>
                )
                : (<GoogleLogin />)
            }
        </HeaderContainer>
    )
}

export default Header