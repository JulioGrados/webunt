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
                    <FooterSocialItem href="https://www.facebook.com/incubaunt.peru" target="_blank">
                        <FacebookIcon />
                    </FooterSocialItem>
                    <FooterSocialItem href="https://pe.linkedin.com/company/incubauntperu" target="_blank">
                        <LinkedinIcon />
                    </FooterSocialItem>
                    <FooterSocialItem href="https://www.instagram.com/incubaunt" target="_blank">
                        <InstagramIcon />
                    </FooterSocialItem>
                </FooterSocial>
            </FooterLeft>
            <FooterRight>
                <FooterRightItem>
                    <FooterTitle>
                        Visítanos
                    </FooterTitle>
                    <FooterList>
                        <FooterListItem href="/">
                            <FooterListItemCircle />
                            <FooterListItemName>
                                Incio
                            </FooterListItemName>
                        </FooterListItem>
                        <FooterListItem href="/programas">
                            <FooterListItemCircle />
                            <FooterListItemName>
                                Programas
                            </FooterListItemName>
                        </FooterListItem>
                        <FooterListItem href="/iniciativas">
                            <FooterListItemCircle />
                            <FooterListItemName>
                                Iniciativas
                            </FooterListItemName>
                        </FooterListItem>
                        <FooterListItem href="/nosotros">
                            <FooterListItemCircle />
                            <FooterListItemName>
                                Nosotros
                            </FooterListItemName>
                        </FooterListItem>
                        <FooterListItem href="/portafolio">
                            <FooterListItemCircle />
                            <FooterListItemName>
                                Portafolio
                            </FooterListItemName>
                        </FooterListItem>
                        <FooterListItem href="/contactanos">
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
                        <FooterListItem href="/programas">
                            <FooterListItemCircle />
                            <FooterListItemName>
                                Innova
                            </FooterListItemName>
                        </FooterListItem>
                        <FooterListItem href="/programas">
                            <FooterListItemCircle />
                            <FooterListItemName>
                                Academy
                            </FooterListItemName>
                        </FooterListItem>
                        <FooterListItem href="/programas">
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
                                    (+51) 946220854
                                </FooterListItemName>
                                <FooterListItemName>
                                    (+51) 985616955
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