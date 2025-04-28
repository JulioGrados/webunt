import styled from 'styled-components'
export const GoalStyled = styled.li`
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const GoalBox = styled.div`
    background-color: ${props => props.index % 2 ? '#1A738D':'#032539' };
    width: 150px;
    height: 150px;
    border-radius: 50%; /* Crea la forma circular */
    overflow: hidden; /* Asegura que la imagen no sobresalga de la caja */
    display: flex; /* Flexbox para centrar la imagen */
    justify-content: center; /* Centra horizontalmente */
    align-items: center; /* Centra verticalmente */
`
export const GoalImg = styled.img`
    object-fit: cover; 
`
export const GoalNumber = styled.h3`
    margin: 12px 0 0 0;
    font-size: 50px;
    font-weight: 600;
    text-align: center;
    color: #fff;
`
export const GoalText = styled.p`
    margin: 0;
    font-size: 15px;
    font-weight: 400;
    line-height: 19px;
    color: #fff;
`