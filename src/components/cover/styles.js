import styled, { keyframes } from 'styled-components'
const blink = keyframes`
    0%, 100% {
        opacity: 1; /* Completamente visible */
    }
    50% {
        opacity: 0; /* Completamente invisible */
    }
`
export const CoverStyled = styled.div`
    /* position: sticky;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)) 0% 0% / cover, url(/static/img/home.png) center center no-repeat rgb(0, 0, 0);
    height: 100vh; */
    background: url('/static/img/home.png') center/cover no-repeat;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 4rem;
    color: white;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 0;
    }
`
export const CoverOtherStyled = styled.div`
    position: sticky;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)) 0% 0% / cover, url(/static/img/home.png) center center no-repeat rgb(0, 0, 0);
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
`
export const CoverText = styled.p`
    margin: 20px 0 40px 0;
    font-size: 25px;
    font-weight: 400;
    color: #fff;
`
export const CoverButtons = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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