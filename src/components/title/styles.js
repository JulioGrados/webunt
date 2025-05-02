import styled from 'styled-components'
export const TitleStyled = styled.h1`
    font-size: 50px;
    font-weight: 700;
    margin: 0;
    text-align: ${props => (props.left ? 'left' : 'center')};
    line-height: 55px;
    color: ${props => (props.color ? '#fff' : '#000')};
`
export const LineStyled = styled.hr`
    width: 80px;
    background-color: ${props => (props.color ? '#fff' : '#1A738D')};
    height: 6px;
    margin: ${props => (props.left ? '25px 0 0 0%' : '25px auto 0')};
    border-radius: 40px;
    border: none;

    @media (max-width: 768px) {
        margin: 20px auto 0;
    }
`