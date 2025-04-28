import styled from 'styled-components'
export const AllyStyled = styled.li`
    border-bottom: 1px solid rgba(153, 153, 153, 0.2);
    border-right: .5px solid rgba(153, 153, 153, 0.2);
    border-left: .5px solid rgba(153, 153, 153, 0.2);
    width: 25%;
    height: 150px;
    overflow: hidden; /* Asegura que la imagen no sobresalga de la caja */
    display: flex; /* Flexbox para centrar la imagen */
    justify-content: center; /* Centra horizontalmente */
    align-items: center; /* Centra verticalmente */
`
export const AllyImg = styled.img`
    max-width: 240px;
    max-height: 120px;
`