import { AllyImg, AllyStyled } from "./styles"

const Ally = ({img}) => {
    return (
        <AllyStyled>
            <AllyImg src={`/static/img/${img}`} />
        </AllyStyled>
    )
}

export default Ally