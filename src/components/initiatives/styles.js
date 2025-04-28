import styled from 'styled-components'

export const InitiativeStyled = styled.li`
    display: flex;
    flex-direction: column;
    width: ${props => props.width ? '33%' : '400px'};
    margin-bottom: ${props => props.margin ? '60px' : '0px'};
    /* border: 3px solid #1A738D; */
    border-radius: 20px;
    padding: 20px;
    /* background-color: rgba(26, 115, 141, 0.1); */
`
export const InitiativeHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 2px solid #1A738D;
    padding-bottom: 5px;
`
export const InitiativeHeaderNumber = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    text-align: center;
    line-height: 25px;
    font-weight: 700;
    color: #1A738D;
    border: 3px solid #1A738D;
    margin-right: 10px;
    font-size: 15px;
`
export const InitiativeHeaderImg = styled.img`
    height: 30px;
`
export const InitiativeBody = styled.div`
    display: flex;
    margin: 20px 0 15px 0;
`
export const InitiativeOtherBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0 15px 0;
`
export const InitiativeText = styled.p`
    margin: 0;
    font-size: ${props => props.width ? '16px' : '13px'};
    line-height: ${props => props.width ? '25px' : '20px'};
`
export const InitiativeOtherText = styled.p`
    margin: 0 0 15px 0;
    font-size: ${props => props.width ? '16px' : '13px'};
    line-height: ${props => props.width ? '25px' : '20px'};
    width: calc(100% - 20px);
    padding-left: 20px;
`
export const InitiativeOtherBodyDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const InitiativeName = styled.h3`
    margin: 0;
    text-align: left;
    color: #1A738D;
    font-size: ${props => props.width ? '30px' : '28px'};
    font-weight: 600;
    text-transform: uppercase;
`
export const InitiativeNameOther = styled.h3`
    margin: 0 0 0 15px;
    text-align: left;
    color: #1A738D;
    font-size: 26px;
    font-weight: 600;
    text-transform: uppercase;
`
export const InitiativeFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const InitiativeSupported = styled.div`
    display: flex;
    align-items: center;
`
export const InitiativeSupportedImg = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
`
export const InitiativeSupportedContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 10px;
`
export const InitiativeSupportedText = styled.h5`
    margin: 0;
    text-align: left;
    font-size: 12px;
    font-weight: 600;
`
export const InitiativeSupportedName = styled.p`
    margin: 0;
    font-size: 14px;
    text-align: left;
`
export const InitiativeButton = styled.a`
    width: 135px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    font-size: 13px;
    border-radius: 18px;
    color: #fff;
    font-weight: 600;
    background-color: #1A738D;
`