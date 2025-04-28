// components/Footer.js
import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const FooterSection = styled.footer`
  background: url('/footer-bg.png') center/cover no-repeat;
  padding: 100px 0;
  background-color: #0D121E;
  color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
`;

const LogoBox = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  img {
    width: 150px;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 1rem;

  a {
    background-color: #00c853;
    color: white;
    padding: 0.6rem;
    border-radius: 50%;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    text-decoration: none;
  }
`;

const InfoBox = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InfoTitle = styled.h5`
  color: #fff;
  font-size: 1.1rem;
  font-weight: bold;
`;

const InfoText = styled.p`
  color: #fff;
  margin: 0;
`;

export default function FooterDitt() {
  return (
    <FooterSection>
      <Container>
        <LogoBox>
          <img src="/static/img/ditt.png" alt="DITT Logo" width={150} />
          <Socials>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </Socials>
        </LogoBox>
        <InfoBox>
          <InfoTitle>Contacto</InfoTitle>
          <InfoText>+044 203040</InfoText>
          <InfoText>cayala@unitru.edu.pe</InfoText>
          <InfoText>cpalaciosc@unitru.edu.pe</InfoText>
        </InfoBox>
        <InfoBox>
          <InfoTitle>Ubicación</InfoTitle>
          <InfoText>Local Central de la Universidad Nacional de Trujillo</InfoText>
          <InfoText>Jr. Diego de Almagro 344 - Trujillo</InfoText>
        </InfoBox>
      </Container>
    </FooterSection>
  );
}