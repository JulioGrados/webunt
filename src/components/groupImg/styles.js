import styled, {keyframes} from 'styled-components'

const spin = keyframes`
    from {
        transform: rotateY(0deg);
    }
    to {
        transform: rotateY(360deg);
    }
`

export const GroupImageStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 412px;
    height: 100%;
    z-index: -1;
`
export const GroupImg1 = styled.img`
    width: 350px;
    height: 240px;
    border-radius: 4px;
    animation: ${spin}  2s forwards;
`
export const GroupImg2 = styled.img`
    width: 157px;
    height: 240px;
    border-radius: 4px;
    animation: ${spin}  2s forwards;
`
export const GroupImg3 = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 4px;
    animation: ${spin}  2s forwards;
`
export const GroupImg4 = styled.img`
    width: 244px;
    height: 202px;
    border-radius: 4px;
    margin-top: 15px;
    animation: ${spin}  2s forwards;
`