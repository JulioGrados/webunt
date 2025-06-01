import { useState } from "react";
import { 
    HeaderButton, 
    HeaderContent, 
    HeaderList, 
    HeaderListItem, 
    HeaderLogo, 
    HeaderLogoImg, 
    HeaderRight, 
    HeaderStyled,
    BurgerButton,
    SideMenu,
    SideMenuItem,
    HeaderVersion
} from "./styles"
import { useSession } from "../../hooks";
import { NavbarContainer, NavbarImg, NavbarUser } from "./admin/styles";
import { DropDown } from "./admin/dropdown";

const Header = ({white = false}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { loggedUser, logout } = useSession()
    console.log('loggedUser', loggedUser)
    return (
        <>
            <HeaderStyled white={white}>
                <HeaderContent>
                    <HeaderLogo href="/">
                        <HeaderLogoImg src={`/static/img/logo.png`} />
                    </HeaderLogo>
                    <HeaderRight>
                        <HeaderList>
                            <HeaderListItem white={white} href="/nosotros">
                                Nosotros
                            </HeaderListItem>
                            <HeaderListItem white={white} href="/programas">
                                Programas
                            </HeaderListItem>
                            <HeaderListItem white={white} href="/iniciativas">
                                Iniciativas
                            </HeaderListItem>
                            <HeaderListItem white={white} href="/portafolio">
                                Portafolio
                            </HeaderListItem>
                            <HeaderListItem white={white} href="/contactanos">
                                Contáctanos
                            </HeaderListItem>
                        </HeaderList>
                        {
                            loggedUser ? loggedUser.names && (
                                <NavbarContainer>
                                    <NavbarUser>
                                        <NavbarImg>{loggedUser && loggedUser.names && loggedUser.names.charAt(0)}</NavbarImg>
                                        {loggedUser && loggedUser.username}
                                        <DropDown handleLogout={logout} user={loggedUser} />
                                    </NavbarUser>
                                </NavbarContainer>
                            ) : (
                                <HeaderButton href='/login'>
                                    Iniciar Sesión
                                </HeaderButton>
                            )
                        }
                        <BurgerButton white={white} onClick={() => setMenuOpen(!menuOpen)}>
                            <span />
                            <span />
                            <span />
                        </BurgerButton>
                    </HeaderRight>
                </HeaderContent>
            </HeaderStyled>
            <SideMenu isOpen={menuOpen} white={white}>
                <SideMenuItem href="/nosotros" onClick={() => setMenuOpen(false)}>Nosotros</SideMenuItem>
                <SideMenuItem href="/programas" onClick={() => setMenuOpen(false)}>Programas</SideMenuItem>
                <SideMenuItem href="/iniciativas" onClick={() => setMenuOpen(false)}>Iniciativas</SideMenuItem>
                <SideMenuItem href="/portafolio" onClick={() => setMenuOpen(false)}>Portafolio</SideMenuItem>
                <SideMenuItem href="/contactanos" onClick={() => setMenuOpen(false)}>Contáctanos</SideMenuItem>
                <SideMenuItem href="/login" onClick={() => setMenuOpen(false)}>Iniciar Sesión</SideMenuItem>
            </SideMenu>
        </>
    )
}

export default Header