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
    justify-content: space-between;
    flex-wrap: wrap;
    width: 412px;
    height: 100%;
`
export const GroupImg1 = styled.img`
    width: 240px;
    height: 200px;
    border-radius: 40px;
    animation: ${spin}  2s forwards;
`
export const GroupImg2 = styled.img`
    width: 157px;
    height: 240px;
    border-radius: 40px;
    animation: ${spin}  2s forwards;
`
export const GroupImg3 = styled.img`
    width: 157px;
    height: 150px;
    border-radius: 40px;
    animation: ${spin}  2s forwards;
`
export const GroupImg4 = styled.img`
    width: 244px;
    height: 202px;
    border-radius: 40px;
    margin-top: 15px;
    animation: ${spin}  2s forwards;
`