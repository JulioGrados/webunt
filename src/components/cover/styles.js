import styled, { keyframes } from 'styled-components'
const blink = keyframes`
    0%, 100% {
        opacity: 1; /* Completamente visible */
    }
    50% {
        opacity: 0; /* Completamente invisible */
    }
`
export const BackgroundVideo = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Esto hace que el video se adapte como "background-size: cover" */
    z-index: 0;
`
export const CoverStyled = styled.div`
    position: relative;
    height: 100vh;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    overflow: hidden;
`
export const Overlay = styled.div`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom right, rgba(3, 37, 57, .2), rgba(26, 115, 141, .2));
  z-index: 1;
`;
export const Content = styled.div`
  position: relative;
  z-index: 2; /* Encima del overlay y el video */
  display: flex;
  flex-direction: column;
  height: 100vh; /* para usar todo el alto de pantalla */
`;
export const Main = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`
export const CoverOtherStyled = styled.div`
    position: sticky;
    width: 100%;
    background: linear-gradient(to bottom right, rgba(3, 37, 57, .3), rgba(26, 115, 141, .3)) 0% 0% / cover, url(/static/img/home.png) center center no-repeat rgb(0, 0, 0);
`
export const CoverContent = styled.div`
    width: 100%;
    text-align: center;
    position: relative;
    z-index: 1;
`
export const CoverOtherContent = styled.div`
    padding: 100px 0 100px 0;
    width: 100%;
    text-align: center;
`
export const CoverWelcome = styled.p`
    color: #fff;
    font-weight: 500;
    font-size: 13px;
    text-transform: uppercase;
    text-align: center;
`
export const CoverTitle = styled.h1`
    font-size: 70px;
    font-weight: 800;
    text-transform: uppercase;
    color: #fff;
    margin: 0;
    @media (max-width: 1024px) {
        font-size: 50px;
    }

    @media (max-width: 768px) {
        font-size: 36px;
    }

    @media (max-width: 480px) {
        font-size: 28px;
    }
`
export const CoverText = styled.p`
    margin: 20px 0 40px 0;
    font-size: 30px;
    font-weight: 600;
    color: #fff;
    @media (max-width: 1024px) {
        font-size: 24px;
    }

    @media (max-width: 768px) {
        font-size: 18px;
        margin: 15px 0 30px 0;
    }

    @media (max-width: 480px) {
        font-size: 16px;
    }
`
export const CoverButtons = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 480px) {
        flex-direction: column;
        gap: 1rem;
    }
`
export const CoverButtonOne = styled.a`
    width: 180px;
    height: 50px;
    border-radius: 25px;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 50px;
    color: #fff;
    background-color: #1A738D;
    transition: transform 0.3s ease;
    &:hover {
        color: #fff;
        transform: scale(1.1);
    }
`
export const CoverButtonTwo = styled.a`
    width: 180px;
    height: 50px;
    border-radius: 25px;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 50px;
    border: 2px solid #fff;
    color: #fff;
    margin-left: 30px;
    transition: transform 0.3s ease;
    &:hover {
        color: #1A738D;
        background: #fff;
        transform: scale(1.1);
    }
    @media (max-width: 480px) {
        margin-left: 0px;
    }
`
export const CoverImg1 = styled.img`
    position: absolute;
    bottom: 0;
    left: 0;
`
export const CoverImg2 = styled.img`
    position: absolute;
    top: 0;
    right: 0;
`
export const CoverImg3 = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
`
export const CoverCircle = styled.div`
    width: 60px;
    height: 60px;
    z-index: 1;
    border-radius: 50%;
    border: 3px solid #fff;
    overflow: hidden; /* Asegura que la imagen no sobresalga de la caja */
    display: flex; /* Flexbox para centrar la imagen */
    justify-content: center; /* Centra horizontalmente */
    align-items: center; /* Centra verticalmente */
    position: absolute;
    bottom: 50px;
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
    animation: ${blink} 1s infinite;
`