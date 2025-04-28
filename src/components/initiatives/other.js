import { BookIcon } from "../icons/book"
import { ChartIcon } from "../icons/chart"
import { CheckIcon } from "../icons/check"
import { RocketIcon } from "../icons/rocket"
import { InitiativeOtherBody, InitiativeButton, InitiativeFooter, InitiativeHeader, InitiativeHeaderImg, InitiativeHeaderNumber, InitiativeNameOther, InitiativeStyled, InitiativeSupported, InitiativeSupportedContent, InitiativeSupportedImg, InitiativeSupportedName, InitiativeSupportedText, InitiativeOtherText, InitiativeOtherBodyDiv } from "./styles"

const InitiativeOther = ({index, img, text, name, supported, supporimg, margin = true, width=false}) => {
    return (
        <InitiativeStyled margin={margin} width={width}>
            <InitiativeHeader>
                {
                    index === 0 && <BookIcon />
                }
                {
                    index === 1 && <RocketIcon />
                }
                {
                    index === 2 && <ChartIcon />
                }
                {/* <InitiativeHeaderImg src={`/static/img/${img}`} alt='initiative' /> */}
                <InitiativeNameOther width={width}>
                    Incuba {name}
                </InitiativeNameOther>
            </InitiativeHeader>
            <InitiativeOtherBody>
                <InitiativeOtherBodyDiv>
                    <CheckIcon />
                    <InitiativeOtherText width={width}>
                        {text}
                    </InitiativeOtherText>
                </InitiativeOtherBodyDiv>
                <InitiativeOtherBodyDiv>
                    <CheckIcon />
                    <InitiativeOtherText width={width}>
                        {text}
                    </InitiativeOtherText>
                </InitiativeOtherBodyDiv>
                <InitiativeOtherBodyDiv>
                    <CheckIcon />
                    <InitiativeOtherText width={width}>
                        {text}
                    </InitiativeOtherText>
                </InitiativeOtherBodyDiv>
                <InitiativeOtherBodyDiv>
                    <CheckIcon />
                    <InitiativeOtherText width={width}>
                        {text}
                    </InitiativeOtherText>
                </InitiativeOtherBodyDiv>
            </InitiativeOtherBody>
            <InitiativeFooter>
                <InitiativeSupported>
                    <InitiativeSupportedImg src={`/static/img/${supporimg}`} alt='supported' />
                    <InitiativeSupportedContent>
                        <InitiativeSupportedText>
                            Respaldado por:
                        </InitiativeSupportedText>
                        <InitiativeSupportedName>
                            {supported}
                        </InitiativeSupportedName>
                    </InitiativeSupportedContent>
                </InitiativeSupported>
            </InitiativeFooter>
        </InitiativeStyled>
    )
}

export default InitiativeOther