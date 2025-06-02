import { GoalBox, GoalImg, GoalNumber, GoalStyled, GoalText } from "./styles"
import { MEDIA_PATH } from 'utils/files/path'
const Goal = ({img, number, description, index}) => {
    return (
        <GoalStyled>
            <GoalBox index={index}>
                <GoalImg src={`${MEDIA_PATH}${img}`} />
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