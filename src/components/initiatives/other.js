import { BookIcon } from "../icons/book"
import { ChartIcon } from "../icons/chart"
import { CheckIcon } from "../icons/check"
import { RocketIcon } from "../icons/rocket"
import { InitiativeOtherBody, InitiativeButton, InitiativeFooter, InitiativeHeader, InitiativeHeaderImg, InitiativeHeaderNumber, InitiativeNameOther, InitiativeStyledPage, InitiativeSupported, InitiativeSupportedContent, InitiativeSupportedImg, InitiativeSupportedName, InitiativeSupportedText, InitiativeOtherText, InitiativeOtherBodyDiv } from "./styles"

const InitiativeOther = ({index, img, text, name, supported, supporimg, margin = true, width=false, char1, char2, char3, char4}) => {
    return (
        <InitiativeStyledPage margin={margin} width={width}>
            <InitiativeHeader>
                <InitiativeNameOther width={width}>
                    Incuba {name}
                </InitiativeNameOther>
            </InitiativeHeader>
            <InitiativeOtherBody>
                {
                    char1 && (
                        <InitiativeOtherBodyDiv>
                            <CheckIcon />
                            <InitiativeOtherText width={width}>
                                {char1}
                            </InitiativeOtherText>
                        </InitiativeOtherBodyDiv>
                    )
                }
                {
                    char2 && (
                        <InitiativeOtherBodyDiv>
                            <CheckIcon />
                            <InitiativeOtherText width={width}>
                                {char2}
                            </InitiativeOtherText>
                        </InitiativeOtherBodyDiv>
                    )
                }
                {
                    char3 && (
                        <InitiativeOtherBodyDiv>
                            <CheckIcon />
                            <InitiativeOtherText width={width}>
                                {char3}
                            </InitiativeOtherText>
                        </InitiativeOtherBodyDiv>
                    )
                }
                {
                    char4 && (
                        <InitiativeOtherBodyDiv>
                            <CheckIcon />
                            <InitiativeOtherText width={width}>
                                {char4}
                            </InitiativeOtherText>
                        </InitiativeOtherBodyDiv>
                    )
                }
            </InitiativeOtherBody>
            <InitiativeFooter>
                <InitiativeSupported>
                    <InitiativeSupportedImg src={`https://api.incubaunt.com${supporimg}`} alt='supported' />
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
        </InitiativeStyledPage>
    )
}

export default InitiativeOther