import { GroupImageStyles, GroupImg1, GroupImg2, GroupImg3, GroupImg4 } from "./styles"

const GroupImage = ({img1, img2, img3, img4}) => {
    return (
        <GroupImageStyles>
            <GroupImg1 src={img1} alt='imagen 1' />
            <GroupImg3 src={img3} alt='imagen 3' />
        </GroupImageStyles>
    )
}
export default GroupImage