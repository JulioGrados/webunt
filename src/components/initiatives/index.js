import { DownIcon } from "../icons/down"
import { InitiativeBody, InitiativeButton, InitiativeFooter, InitiativeHeader, InitiativeHeaderImg, InitiativeHeaderNumber, InitiativeName, InitiativeStyled, InitiativeSupported, InitiativeSupportedContent, InitiativeSupportedImg, InitiativeSupportedName, InitiativeSupportedText, InitiativeText } from "./styles"
import { MEDIA_PATH } from 'utils/files/path'
const Initiative = ({index, img, text, name, supported, supporimg, margin = true, width=false}) => {
    return (
        <InitiativeStyled margin={margin} width={width}>
            <InitiativeHeader>
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
                    <InitiativeSupportedImg src={`${MEDIA_PATH}${img}`} alt='supported' />
                    <InitiativeSupportedContent>
                        <InitiativeSupportedText>
                            Respaldado por:
                        </InitiativeSupportedText>
                        <InitiativeSupportedName>
                            {supported}
                        </InitiativeSupportedName>
                    </InitiativeSupportedContent>
                </InitiativeSupported>
                <InitiativeButton href='/iniciativas'>
                    Leer más
                </InitiativeButton>
            </InitiativeFooter>
        </InitiativeStyled>
    )
}

export default Initiative