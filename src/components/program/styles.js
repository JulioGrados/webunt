import styled from 'styled-components'
export const ProgramStyled = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5px;
    width: 309px;
    margin-top: ${props => props.margin};
`
export const ProgramImg = styled.img`
    width: 50px;
    margin: 0 15px;
`
export const ProgramContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
`

export const ProgramContentTitle = styled.h4`
    text-align: left;
    font-size: 16px;
    font-weight: 600;
    margin: 0;
`
export const ProgramContentBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const ProgramContentText = styled.div`
    text-align: left;
    display: flex;
    align-items: center;
    margin-top: 10px;
`
export const ProgramContentTextP = styled.p`
    font-size: 13px;
    margin: 0;
    line-height: 25px;
    text-align: left;
    width: calc(100% - 15px);
    padding-left: 10px;
`
export const ProgramButton = styled.a`
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    background-color: #1A738D;
    border-radius: 18px;
    width: 134px;
    height: 34px;
    display: flex; /* Flexbox para centrar la imagen */
    justify-content: center; /* Centra horizontalmente */
    align-items: center; /* Centra verticalmente */  
    margin-top: 15px;
`

export const ProgramButtonText = styled.p`
    display: inline;
    margin: 0 3px 0 0;
    color: #1A738D;
    font-size: 13px;
    font-weight: 600;
`
export const ProgramContentFigure = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ProgramArrowContent = styled.div`
    display: flex;
    align-items: center;
`
export const ProgramArrowRectangle = styled.div`
    width: 300px;
    height: 10px;
    background-color: #1A738D; 
    border-radius: 20px;
`
export const ProgramArrowTriangle = styled.div`
    width: 0;
    height: 0;
    border-left: 12px solid transparent; /* Lado izquierdo invisible */
    border-right: 12px solid transparent; /* Lado derecho invisible */
    border-bottom: 22px solid #1A738D; /* Color de la punta de la flecha */
    margin-left: -12px;
    transform: rotate(90deg);
`
export const ProgramContentFigureImg = styled.img`

`
export const ProgramContentFigureName = styled.h4`
    margin: 0;
    font-weight: 600;
    font-size: 22px;
    color: #1A738D;
    text-align: center;
    margin: 15px 0;
`