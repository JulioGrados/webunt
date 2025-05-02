import styled from 'styled-components'
export const GoalStyled = styled.li`
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        width: 130px;
    }

    @media (max-width: 480px) {
        width: 100%;
        max-width: 240px;
    }
`
export const GoalBox = styled.div`
    background-color: ${props => props.index % 2 ? '#1A738D' : '#032539'};
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        width: 120px;
        height: 120px;
    }

    @media (max-width: 480px) {
        width: 100px;
        height: 100px;
    }
`
export const GoalImg = styled.img`
    max-width: 80%;
    max-height: 80%;
    object-fit: contain;
`
export const GoalNumber = styled.h3`
    margin: 12px 0 0 0;
    font-size: 50px;
    font-weight: 600;
    text-align: center;
    color: #fff;

    @media (max-width: 768px) {
        font-size: 36px;
    }

    @media (max-width: 480px) {
        font-size: 30px;
    }
`
export const GoalText = styled.p`
    margin: 0;
    font-size: 15px;
    font-weight: 400;
    line-height: 19px;
    color: #fff;

    @media (max-width: 768px) {
        font-size: 14px;
    }

    @media (max-width: 480px) {
        font-size: 13px;
    }
`