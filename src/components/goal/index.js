import { GoalBox, GoalImg, GoalNumber, GoalStyled, GoalText } from "./styles"

const Goal = ({img, number, text, index}) => {
    return (
        <GoalStyled>
            <GoalBox index={index}>
                <GoalImg src={`/static/img/${img}`} />
            </GoalBox>
            <GoalNumber>
                {number}
            </GoalNumber>
            <GoalText>
                {text}
            </GoalText>
        </GoalStyled>
    )
}
export default Goal