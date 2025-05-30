import styled from 'styled-components'
export const TitleStyled = styled.h1`
    font-size: clamp(28px, 6vw, 50px); 
    font-weight: 700;
    margin: 0;
    text-align: ${props => (props.left ? 'left' : 'center')};
    line-height: 1.1;
    color: ${props => (props.color ? '#fff' : '#032539')};

    @media (max-width: 1024px) {
        font-size: 42px;
    }

    @media (max-width: 768px) {
        font-size: 36px;
    }

    @media (max-width: 480px) {
        font-size: 28px;
    }
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