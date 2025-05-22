import { AllyImg, AllyStyled } from "./styles"

const Ally = ({img}) => {
    return (
        <AllyStyled>
            <AllyImg src={img} />
        </AllyStyled>
    )
}

export default Ally