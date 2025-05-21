import styled from 'styled-components'
// Botón hamburguesa
export const BurgerButton = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 30px;
  height: 30px;
  z-index: 1500; /* Encima de todo */
  margin-left: 20px;
  span {
    width: 25px;
    height: 3px;
    background-color: ${props => props.white ? '#000' : '#fff'};
    margin: 3px 0;
    transition: all 0.3s;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

// Menú lateral
export const SideMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${props => (props.isOpen ? '0' : '-100%')};
  width: 250px;
  height: 100vh;
  background-color: ${props => props.white ? '#fff' : '#1A738D'};
  color: ${props => props.white ? '#000' : '#fff'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: right 0.3s ease-in-out;
  z-index: 1200;
`;

export const SideMenuItem = styled.a`
  font-size: 20px;
  margin: 20px 0;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: scale(1.1);
  }
`;

export const HeaderStyled = styled.div`
    padding: 1rem 2rem;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    background: ${props => props.white ? '#fff' : 'rgba(255, 255, 255, 0.1)'};
    backdrop-filter: blur(8px);
    @media (max-width: 768px) {
      padding: 1rem;
    }
`
export const HeaderVersion = styled.span`
  font-size: 25px;
  font-weight: 800;
  position: absolute;
  right: -30px;
  bottom: -10px;
  line-height: normal;
  color: orange;
`
export const HeaderSignStyled = styled.div`
    height: 70px;
    width: 100%;
    background: #fff;
    position: relative;
    z-index: 3;
    box-shadow: rgba(105, 106, 119, 0.1) 0px 2px 4px 0px;
`

export const HeaderContent = styled.div`
    max-width: 1200px;
    height: 100%;
    margin: 0px auto;
    padding: 0px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
      padding: 0 1rem;
    }
`
export const HeaderLogo = styled.a`
    width: 210px;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
      width: 160px;
    }
`
export const HeaderLogoImg = styled.img`
    width: 100%;
`
export const HeaderRight = styled.div`
    display: flex;
    align-items: center;
`
export const HeaderList = styled.ul`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none; /* Escondemos el menú en móviles */
  }
`
export const HeaderListItem = styled.a`
    font-size: 16px;
    font-weight: 500;
    margin-right: 20px;
    color: ${props=> props.white ? '#000' : '#fff'};
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.1);
      color: #fff;
    }
`
export const HeaderButton = styled.a`
    width: 135px;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    border-radius: 18px;
    color: #fff;
    background-color: #1A738D;
    &:hover {
      transform: scale(1.1);
      color: #fff;
    }
    @media (max-width: 768px) {
      width: 120px;
      height: 34px;
      font-size: 13px;
    }
`

/* DITT */
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 105px;
    height: auto;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  a {
    text-decoration: none;
    color: #fff;
    font-weight: 500;

    &:hover {
      color: #00BF63;
    }
  }
`;

export const PhoneContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: white;
`;

export const PhoneIcon = styled.div`
  background-color: #00BF63;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
`;

export const PhoneText = styled.div`
  display: flex;
  flex-direction: column;

  span:first-child {
    font-weight: bold;
    font-size: 0.9rem;
  }

  span:last-child {
    font-size: 0.95rem;
  }
`;