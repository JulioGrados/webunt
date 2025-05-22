import { CellIcon } from "../icons/cell"
import { FacebookIcon } from "../icons/facebook"
import { InstagramIcon } from "../icons/instagram"
import { LinkedinIcon } from "../icons/linkedin"
import { TwitterIcon } from "../icons/twitter"
import { FooterLeft, FooterLine, FooterList, FooterListItem, FooterListItemCircle, FooterListItemContent, FooterListItemName, FooterListItemSubtitle, FooterLogo, FooterRight, FooterRightItem, FooterSocial, FooterSocialItem, FooterStyled, FooterText, FooterTitle } from "./styles"

const Footer = () => {
    return (
        <FooterStyled>
            <FooterLeft>
                <FooterLogo src={`/static/img/logo.png`} />
                {/* <FooterLine /> */}
                <FooterText>
                    ¡Formando startups de alto impacto!. Visita a detalle nuestra página web y nuestras redes sociales.
                </FooterText>
                <FooterSocial>
                    <FooterSocialItem>
                        <FacebookIcon />
                    </FooterSocialItem>
                    <FooterSocialItem>
                        <TwitterIcon />
                    </FooterSocialItem>
                    <FooterSocialItem>
                        <LinkedinIcon />
                    </FooterSocialItem>
                    <FooterSocialItem>
                        <InstagramIcon />
                    </FooterSocialItem>
                </FooterSocial>
            </FooterLeft>
            <FooterRight>
                <FooterRightItem>
                    <FooterTitle>
                        Visitanos
                    </FooterTitle>
                    <FooterList>
                        <FooterListItem>
                            <FooterListItemCircle />
                            <FooterListItemName>
                                Incio
                            </FooterListItemName>
                        </FooterListItem>
                        <FooterListItem>
                            <FooterListItemCircle />
                            <FooterListItemName>
                                Programas
                            </FooterListItemName>
                        </FooterListItem>
                        <FooterListItem>
                            <FooterListItemCircle />
                            <FooterListItemName>
                                Iniciativas
                            </FooterListItemName>
                        </FooterListItem>
                        <FooterListItem>
                            <FooterListItemCircle />
                            <FooterListItemName>
                                Nosotros
                            </FooterListItemName>
                        </FooterListItem>
                        <FooterListItem>
                            <FooterListItemCircle />
                            <FooterListItemName>
                                Portafolio
                            </FooterListItemName>
                        </FooterListItem>
                        <FooterListItem>
                            <FooterListItemCircle />
                            <FooterListItemName>
                                Contáctanos
                            </FooterListItemName>
                        </FooterListItem>
                    </FooterList>
                </FooterRightItem>
                <FooterRightItem>
                    <FooterTitle>
                        Programas
                    </FooterTitle>
                    <FooterList>
                        <FooterListItem>
                            <FooterListItemCircle />
                            <FooterListItemName>
                                Innova
                            </FooterListItemName>
                        </FooterListItem>
                        <FooterListItem>
                            <FooterListItemCircle />
                            <FooterListItemName>
                                Academy
                            </FooterListItemName>
                        </FooterListItem>
                        <FooterListItem>
                            <FooterListItemCircle />
                            <FooterListItemName>
                                Escala
                            </FooterListItemName>
                        </FooterListItem>
                    </FooterList>
                </FooterRightItem>
                <FooterRightItem>
                    <FooterTitle>
                        Información
                    </FooterTitle>
                    <FooterList>
                        <FooterListItem>
                            <FooterListItemName>
                                Jr. Diego de Almagro 344 - Local central de la Universidad Nacional de Trujillo
                            </FooterListItemName>
                        </FooterListItem>
                        <FooterListItem>
                            <FooterListItemName>
                                incubaunt@unt.edu.pe
                            </FooterListItemName>
                        </FooterListItem>
                        <FooterListItem>
                            <FooterSocialItem>
                                <CellIcon />
                            </FooterSocialItem>
                            <FooterListItemContent>
                                <FooterListItemSubtitle>
                                    Llamanos:
                                </FooterListItemSubtitle>
                                <FooterListItemName>
                                    (044) 209020
                                </FooterListItemName>
                            </FooterListItemContent>
                        </FooterListItem>
                    </FooterList>
                </FooterRightItem>
            </FooterRight>
        </FooterStyled>
    )
}

export default Footer