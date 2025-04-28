import styled from 'styled-components'


export const Grid = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
`
export const Root = styled.div`
    overflow: hidden;
    position: relative;
    max-height: 100vh;
    flex-grow: 0;
    max-width: 50%;
    flex-basis: 50%;
`
export const Container = styled.div`
    height: 100%;
    margin: auto;
    display: flex;
    padding: 24px;
    max-width: 510px;
    flex-direction: column;
`
export const Register = styled.div`
    display: flex;
    margin-top: auto;
    flex-direction: column;
`
export const Title = styled.h4`
    margin: 0;
    font-weight: 600;
    /* color: #1A738D; */
    font-size: 30px;

`
export const Subtitle = styled.span`
    font-weight: 300;
`
export const Circle = styled.h6`
    color: #ffffff;
    width: 35px;
    height: 35px;
    margin: 20px 0px;
    display: flex;
    align-items: center;
    border-radius: 50%;
    justify-content: center;
    font-size: 12px;
    background-color: #1A738D;
`
export const Advance = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #1A738D;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0px;
`

export const Logo = styled.a`
    width: 80px;
    align-self: left;
`
export const Image = styled.img`
    width: 120px;
`
export const Underline = styled.span`
    margin: 8px 0 12px 0;
`
export const LinkA = styled.a`
    font-size: 13px;
    margin: 0;
    color: #1A738D;
    &:hover {
      color: #1A738D;
    }
`
export const Footer = styled.div`
    margin-top: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Error = styled.span`
    text-align: center;
    color: red;
    margin-bottom: 10px;
    font-size: 13px;
`
export const Cover = styled.section`
    position: sticky;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(26, 115, 141, 0.8), rgba(26, 115, 141, 0.8)), #1A738D url("/static/img/login.jpg") no-repeat center;
    background-size: cover;
`

export const FormControl = styled.div`
    width: 100%;
    margin-bottom: 15px;
`

export const FormLabel = styled.label`
    width: 100%;
    margin-bottom: 15px;
    transition: color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
    color: rgba(0, 0, 0, 0.54);
    padding: 0;
    font-size: 12px;
    font-weight: 400;
`

export const FormInput = styled.input`
    width: 100%;
    border: 1px solid #ced4da;
    padding: 10px 12px;
    position: relative;
    font-size: 13px;
    transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 4px;
    background-color: #fff;
    &:focus {
        box-shadow: rgba(26, 115, 141, 0.8) 0 0 0 2px;
        border-color: #1A738D;
    }
`

export const FormSelect = styled.select`
    width: 100%;
    border: 1px solid #ced4da;
    padding: 10px 12px;
    position: relative;
    font-size: 13px;
    transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 4px;
    background-color: #fff;
    &:focus {
        box-shadow: rgba(26, 115, 141, 0.8) 0 0 0 2px;
        border-color: #1A738D;
    }
`

export const FormButton = styled.button`
    border-color: #1A738D;
    background-color: #1A738D;
    font-size: 14px;
    text-transform: uppercase;
    width: 100%;
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
`

export const FormError = styled.span`
    color: red;
    font-size: 13px;
`