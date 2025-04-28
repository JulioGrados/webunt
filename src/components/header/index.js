import { HeaderButton, HeaderContent, HeaderList, HeaderListItem, HeaderLogo, HeaderLogoImg, HeaderRight, HeaderStyled } from "./styles"

const Header = ({white = false}) => {
    return (
        <HeaderStyled white={white}>
            <HeaderContent>
                <HeaderLogo>
                    <HeaderLogoImg src={`/static/img/logo.png`} />
                </HeaderLogo>
                <HeaderRight>
                    <HeaderList>
                        <HeaderListItem white={white}>
                            Nosotros
                        </HeaderListItem>
                        <HeaderListItem white={white}>
                            Programas
                        </HeaderListItem>
                        <HeaderListItem white={white}>
                            iniciativas
                        </HeaderListItem>
                        <HeaderListItem white={white}>
                            Protafolio
                        </HeaderListItem>
                        <HeaderListItem white={white}>
                            Contactanos
                        </HeaderListItem>
                    </HeaderList>
                    <HeaderButton>
                        Iniciar Sesión
                    </HeaderButton>
                </HeaderRight>
            </HeaderContent>
        </HeaderStyled>
    )
}

export default Header