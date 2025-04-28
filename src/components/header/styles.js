import styled from 'styled-components'
export const HeaderStyled = styled.div`
    /* height: 70px;
    width: 100%;
    background: ${props => props.white ? '#fff' : 'rgba(255, 255, 255, 0.4)'};
    position: relative;
    z-index: 3;
    box-shadow: ${props => props.white ? 'rgba(105, 106, 119, 0.1) 0px 2px 4px 0px' : 'none'}; */
    padding: 1rem 2rem;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    background: ${props => props.white ? '#fff' : 'rgba(255, 255, 255, 0.1)'};
    backdrop-filter: blur(8px);
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
`
export const HeaderLogo = styled.a`
    width: 210px;
    height: 100%;
    display: flex;
    align-items: center;
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
`
export const HeaderListItem = styled.a`
    font-size: 16px;
    font-weight: 500;
    margin-right: 20px;
    color: ${props=> props.white ? '#000' : '#fff'};
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