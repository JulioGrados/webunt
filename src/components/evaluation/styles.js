import styled from 'styled-components'

export const EvaluationStyled = styled.div`
    width: 100%;
    height: calc(100% - 70px);
    margin: 0 auto;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const EvaluationControl = styled.div`
    max-width: 1200px;
    height: 100%;
    padding: 0px 30px;
    background-color: #fff;
    width: 100%;
    overflow: auto;
`

export const EvaluationContainer = styled.div`
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const EvaluationTitle = styled.h3`
    margin: 0;
    font-size: 25px;
    text-align: left;
    color: #000;
    font-weight: 600;
`

export const EvaluationText = styled.p`
    margin: 5px 0 0 0;
    font-size: 14px;
    color: #000;
    text-align: left;
`

export const EvaluationItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 20px;
`

export const EvaluationItem = styled.div`
    padding: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 45%;
    background-color: #fff;
    border: 1px solid #F5F5F5;
    box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.1);
    margin-bottom: 15px;
`

export const EvaluationItemTitle = styled.h5`
    font-size: 15px;
    margin: 0;
    text-align: left;
    font-weight: 300;
`

export const EvaluationItemButton = styled.a`
    border-color: #1A738D;
    background-color: #1A738D;
    font-size: 14px;
    width: 180px;
    height: 45px;
    line-height: 45px;
    cursor: pointer;
    box-sizing: border-box;
    /* transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; */
    font-weight: 500;
    border-radius: 4px;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    border: none;
    margin: 0;
    text-align: center;
`

export const EvaluationBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 35px;
`

export const EvaluationSub = styled.p`
    font-size: 15px;
    max-width: 500px;
    margin: 20px 0 0 0;
    text-align: center;
`

export const EvaluationInfo = styled.div`
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`