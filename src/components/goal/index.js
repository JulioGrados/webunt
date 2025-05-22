import { GoalBox, GoalImg, GoalNumber, GoalStyled, GoalText } from "./styles"

const Goal = ({img, number, description, index}) => {
    return (
        <GoalStyled>
            <GoalBox index={index}>
                <GoalImg src={`http://localhost:8001${img}`} />
            </GoalBox>
            <GoalNumber>
                {number}
            </GoalNumber>
            <GoalText>
                {description}
            </GoalText>
        </GoalStyled>
    )
}
export default Goal