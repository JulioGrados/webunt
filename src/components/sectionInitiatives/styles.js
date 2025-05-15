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
    padding: 80px 0;

    @media (max-width: 768px) {
        padding: 60px 0;
    }

    @media (max-width: 480px) {
        padding: 40px 0;
    }
`
export const InitiativesList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    width: 100%;
    margin-top: 50px;

    @media (max-width: 768px) {
        gap: 1.5rem;
        margin-top: 40px;
    }

    @media (max-width: 480px) {
        gap: 1rem;
    }
`
export const InitiativeContent = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
`
export const InitiativeIcon = styled.div`
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: center;

    @media (max-width: 768px) {
        position: static;
        transform: none;
        margin: 20px 0;
    }
`
export const InitiativeItem = styled.div`
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    @media (max-width: 768px) {
        margin-top: 40px;
        padding: 0 1rem;
    }
`