import { LineStyled, TitleStyled } from "./styles"

export const Title = ({text, left = false, color=''}) => {
    return (
        <>
            <TitleStyled left={left} color={color}>
                {text}
            </TitleStyled>
            <LineStyled left={left} color={color}/>
        </>
    )
}

export default Title