import { GroupImageStyles, GroupImg1, GroupImg2, GroupImg3, GroupImg4, GroupImageContent } from "./styles"

const GroupImageBenefit = ({img1, img2, img3, img4}) => {
    return (
        <GroupImageStyles>
            <GroupImageContent>
                <div></div>
                <GroupImg1 src={img2} alt='imagen 3' />
            </GroupImageContent>
            <GroupImageContent>
                <GroupImg3 src={img1} alt='imagen 1' />
                <div></div>
            </GroupImageContent>
        </GroupImageStyles>
    )
}
export default GroupImageBenefit