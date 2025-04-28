import styled, {keyframes} from 'styled-components'

const rotateArrow = keyframes`
    from {
        transform: translate(-50%, -50%) rotate(0deg); /* Rotación inicial */
    }
    to {
        transform: translate(-50%, -50%) rotate(360deg); /* Rotación completa */
    }
`
export const SectionInitiativesStyled = styled.div`
    width: 100%;
`
export const InitiativesList = styled.ul`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`
export const InitiativeContent = styled.div`
    width: 100%;
    position: relative;
`
export const InitiativeIcon = styled.div`
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* animation: ${rotateArrow} 2s linear infinite; */
    transform-origin: center;
`
export const InitiativeItem = styled.div`
    margin-top: 60px;
    overflow: hidden; /* Asegura que la imagen no sobresalga de la caja */
    display: flex; /* Flexbox para centrar la imagen */
    justify-content: center; /* Centra horizontalmente */
    align-items: center; /* Centra verticalmente */
`