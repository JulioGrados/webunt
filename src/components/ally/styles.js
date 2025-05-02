import styled from 'styled-components'
export const AllyStyled = styled.li`
    border-bottom: 1px solid rgba(153, 153, 153, 0.2);
    border-right: 0.5px solid rgba(153, 153, 153, 0.2);
    border-left: 0.5px solid rgba(153, 153, 153, 0.2);
    width: 25%;
    min-width: 180px;
    height: 150px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1024px) {
        width: 33.3%;
    }

    @media (max-width: 768px) {
        width: 45%;
        height: 120px;
    }

    @media (max-width: 480px) {
        width: 100%;
        height: 100px;
    }
`
export const AllyImg = styled.img`
    max-width: 90%;
    max-height: 100%;
    object-fit: contain;
`