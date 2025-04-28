// import { HeaderButton, HeaderList, HeaderListItem, HeaderLogo, HeaderLogoImg, HeaderRight } from "./admin/styles"
import { DropDown } from './admin/dropdown'
import { NavbarContainer, NavbarImg, NavbarUser } from './admin/styles'
import {HeaderSignStyled, HeaderContent, HeaderLogo, HeaderLogoImg, HeaderRight} from './styles'

const HeaderSign = ({user, handleLogout}) => {
    
    return (
        <HeaderSignStyled >
            <HeaderContent>
                <HeaderLogo>
                    <HeaderLogoImg src={`/static/img/logo.png`} />
                </HeaderLogo>
                <HeaderRight>
                    <NavbarContainer>
                        <NavbarUser>
                            <NavbarImg>{user && user.names && user.names.charAt(0)}</NavbarImg>
                            {user && user.username}
                            <DropDown handleLogout={handleLogout} user={user} />
                        </NavbarUser>
                    </NavbarContainer>
                </HeaderRight>
            </HeaderContent>
        </HeaderSignStyled>
    )
}

export default HeaderSign