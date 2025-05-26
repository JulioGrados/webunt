import styled, {keyframes} from 'styled-components'

const spin = keyframes`
    from {
        transform: rotateY(0deg);
    }
    to {
        transform: rotateY(360deg);
    }
`
export const GroupImageContent = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`
export const GroupImageStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 412px;
    height: 100%;
    z-index: -1;
    @media (max-width: 768px) {
        width: 100%;
        align-items: center;
    }
`
export const GroupImg1 = styled.img`
    max-width: 250px;
    height: 200px;
    object-fit: cover;
    border-radius: 4px;
    animation: ${spin}  2s forwards;
`
export const GroupImg2 = styled.img`
    max-width: 250px;
    height: 140px;
    border-radius: 4px;
    animation: ${spin}  2s forwards;
`
export const GroupImg3 = styled.img`
    max-width: 250px;
    height: 200px;
    margin-top: -55px;
    border-radius: 4px;
    object-fit: cover;
    animation: ${spin}  2s forwards;
`
export const GroupImg4 = styled.img`
    width: 244px;
    height: 202px;
    border-radius: 4px;
    margin-top: 15px;
    animation: ${spin}  2s forwards;
`