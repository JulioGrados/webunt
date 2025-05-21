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

const Header = ({white = false}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <HeaderStyled white={white}>
                <HeaderContent>
                    <HeaderLogo href="/">
                        <HeaderLogoImg src={`/static/img/logo.png`} />
                        <HeaderVersion>2.0</HeaderVersion>
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
                                iniciativas
                            </HeaderListItem>
                            <HeaderListItem white={white} href="/portafolio">
                                Protafolio
                            </HeaderListItem>
                            <HeaderListItem white={white} href="/contactanos">
                                Contactanos
                            </HeaderListItem>
                        </HeaderList>
                        <HeaderButton>
                            Iniciar Sesión
                        </HeaderButton>
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