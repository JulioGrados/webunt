import { FiPhone } from "react-icons/fi"
import {HeaderContainer, Logo, Nav, PhoneContainer, PhoneIcon, PhoneText} from './styles'

const HeaderDitt = () => {
    return (
      <HeaderContainer>
        <Logo>
            <img src="/static/img/ditt.png" alt="DITT Logo" width={105} height={40} />
        </Logo>
        <Nav>
          <a href="#">Inicio</a>
          <a href="#">Nosotros</a>
          <a href="#">Unidades</a>
          <a href="#">Contáctanos</a>
        </Nav>
        <PhoneContainer>
            <PhoneIcon>
                <FiPhone />
            </PhoneIcon>
            <PhoneText>
                <span>Llámanos:</span>
                <span>+044 203040</span>
            </PhoneText>
        </PhoneContainer>
      </HeaderContainer>
    );
}

export default HeaderDitt