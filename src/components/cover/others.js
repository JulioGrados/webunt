import { Container } from "../../styles/main"
import Header from "../header"
import { LowIcon } from "../icons/low"
import { CoverButtonOne, CoverButtons, CoverButtonTwo, CoverCircle, CoverOtherContent, CoverImg1, CoverImg2, CoverImg3, CoverOtherStyled, CoverText, CoverTitle, CoverWelcome } from "./styles"

const CoverOther = ({title}) => {
    return (
        <CoverOtherStyled>
            <Header />
            <Container>
                <CoverOtherContent>
                    <CoverTitle>
                        {title}
                    </CoverTitle>
                </CoverOtherContent>
            </Container>
        </CoverOtherStyled>
    )
}

export default CoverOther