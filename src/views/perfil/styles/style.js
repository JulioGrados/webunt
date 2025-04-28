import styled from 'styled-components'
import { Button } from 'antd'

export const FormRightTitle = styled.h3`
  font-weight: 500;
  margin: 0 0 15px 0;
  font-size: 18px;
`

export const FormHeader = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  margin-bottom: 20px;
`

export const FormBody = styled.div`
  width: 100%;
`

export const FormHeaderTitle = styled.h4`
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  margin: 0;
`

export const FormHeaderPlus = styled(Button)`
  display: inline-block;
`

export const HeaderFlex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: #FFF;
  padding: 20px;
`

export const HeaderButton = styled.a`
  width: 30%;
  height: 32px;
  text-align: center;
  line-height: 32px;
  background-color: #1890ff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  :hover {
    background-color: #40a9ff;
  }
`

export const PerfilStyled = styled.div`
    width: 100%;
    height: calc(100% - 70px);
    margin: 0 auto;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PerfilControl = styled.div`
    max-width: 1200px;
    height: 100%;
    padding: 0px 30px;
    background-color: #fff;
    width: 100%;
    overflow: auto;
`

export const PerfilContainer = styled.div`
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const PerfilTitle = styled.h3`
    margin: 0;
    font-size: 25px;
    text-align: left;
    color: #000;
    font-weight: 600;
`

export const PerfilText = styled.p`
    margin: 5px 0 0 0;
    font-size: 14px;
    color: #000;
    text-align: left;
`

export const PerfilBody = styled.div`
    width: 100%;
`