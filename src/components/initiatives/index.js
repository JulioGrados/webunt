import { DownIcon } from "../icons/down"
import { InitiativeBody, InitiativeButton, InitiativeFooter, InitiativeHeader, InitiativeHeaderImg, InitiativeHeaderNumber, InitiativeName, InitiativeStyled, InitiativeSupported, InitiativeSupportedContent, InitiativeSupportedImg, InitiativeSupportedName, InitiativeSupportedText, InitiativeText } from "./styles"

const Initiative = ({index, img, text, name, supported, supporimg, margin = true, width=false}) => {
    return (
        <InitiativeStyled margin={margin} width={width}>
            <InitiativeHeader>
                <InitiativeHeaderNumber>
                    {index + 1}
                </InitiativeHeaderNumber>
                {/* <InitiativeHeaderImg src={`/static/img/${img}`} alt='initiative' /> */}
                <InitiativeName width={width}>
                    Incuba {name}
                </InitiativeName>
            </InitiativeHeader>
            <InitiativeBody>
                <InitiativeText width={width}>
                    {text}
                </InitiativeText>
            </InitiativeBody>
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
                <InitiativeButton>
                    Leer más
                </InitiativeButton>
            </InitiativeFooter>
        </InitiativeStyled>
    )
}

export default Initiative