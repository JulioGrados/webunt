import { GroupImageStyles, GroupImg1, GroupImg2, GroupImg3, GroupImg4, GroupImageContent } from "./styles"

const GroupImage = ({img1, img2, img3, img4}) => {
    return (
        <GroupImageStyles>
            <GroupImageContent>
                <GroupImg1 src={img1} alt='imagen 1' />
                <div></div>
            </GroupImageContent>
            <GroupImageContent>
                <div></div>
                <GroupImg3 src={img2} alt='imagen 3' />
            </GroupImageContent>
        </GroupImageStyles>
    )
}
export default GroupImage