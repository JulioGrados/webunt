import styled from 'styled-components'

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
    align-items: stretch;
    flex-wrap: wrap;
    gap: 2rem;
    width: 100%;
    margin-top: 50px;

    @media (min-width: 769px) {
        // Para pantallas grandes, ajustamos posición manual por item
        & > *:nth-child(1) {
            flex: 1 1 45%;
            display: flex;
            justify-content: flex-start;
        }

        & > *:nth-child(2) {
            flex: 1 1 45%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        & > *:nth-child(3) {
            flex: 1 1 100%;
            display: flex;
            justify-content: center;
            margin-top: 2rem;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
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