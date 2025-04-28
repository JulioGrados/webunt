import { Container } from "../../styles/main"
import Header from "../header"
import { LowIcon } from "../icons/low"
import { CoverButtonOne, CoverButtons, CoverButtonTwo, CoverCircle, CoverContent, CoverImg1, CoverImg2, CoverImg3, CoverStyled, CoverText, CoverTitle, CoverWelcome } from "./styles"

const Cover = () => {
    return (
        <CoverStyled>
            <Header />
            <Container>
                <CoverContent>
                    <CoverTitle>
                        Fomentamos StartUps de Alto Impacto
                    </CoverTitle>
                    <CoverText>
                        Nuestro objetivo es que más emprendedores de La Libertad y el Perú, encuentren el camino del éxito. 
                    </CoverText>
                    <CoverButtons>
                        <CoverButtonOne>
                            Iniciar Sesión
                        </CoverButtonOne>
                        <CoverButtonTwo>
                            Contactanos
                        </CoverButtonTwo>
                    </CoverButtons>
                </CoverContent>
            </Container>
            <CoverCircle>
                <LowIcon />
            </CoverCircle>
        </CoverStyled>
    )
}

export default Cover