import { EmailIcon } from "../icons/email"
import { LocationIcon } from "../icons/location"
import { PhoneIcon } from "../icons/phone"
import { SectionContactForm, SectionContactFormButton, SectionContactFormInput, SectionContactFormTextarea, SectionContactItem, SectionContactItemCircle, SectionContactItemContent, SectionContactItemContentName, SectionContactItemContentText, SectionContactList, SectionContactMaps, SectionContactMapsIframe, SectionContactMesaje, SectionContactMesajeText, SectionContactMesajeTitle, SectionContactStyled } from "./styles"

export const SectionContact = () => {
    return (
        <SectionContactStyled>
            <SectionContactList>
                <SectionContactItem>
                    <SectionContactItemCircle>
                        <LocationIcon />
                    </SectionContactItemCircle>
                    <SectionContactItemContent>
                        <SectionContactItemContentName>Ubicación:</SectionContactItemContentName>
                        <SectionContactItemContentText>Jr. Diego de Almagro 344 - Local central de la Universidad Nacional de Trujillo</SectionContactItemContentText>
                    </SectionContactItemContent>
                </SectionContactItem>
                <SectionContactItem>
                    <SectionContactItemCircle>
                        <EmailIcon />
                    </SectionContactItemCircle>
                    <SectionContactItemContent>
                        <SectionContactItemContentName>Email:</SectionContactItemContentName>
                        <SectionContactItemContentText>cayala@unitru.edu.pe</SectionContactItemContentText>
                        <SectionContactItemContentText>yhuacanjulca@unitru.edu.pe</SectionContactItemContentText>
                    </SectionContactItemContent>
                </SectionContactItem>
                <SectionContactItem>
                    <SectionContactItemCircle>
                        <PhoneIcon />
                    </SectionContactItemCircle>
                    <SectionContactItemContent>
                        <SectionContactItemContentName>Teléfonos:</SectionContactItemContentName>
                        <SectionContactItemContentText>+51 946 220 854</SectionContactItemContentText>
                        <SectionContactItemContentText>+51 985 616 955</SectionContactItemContentText>
                    </SectionContactItemContent>
                </SectionContactItem>
            </SectionContactList>
            <SectionContactMaps>
                <SectionContactMapsIframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.902237735278!2d-79.03255802397122!3d-8.111436391917714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3d16fb65b62d%3A0x8ad9b3e4d0b5c897!2sLocal%20Central%20Universidad%20Nacional%20de%20Trujillo!5e0!3m2!1ses!2spe!4v1729774643467!5m2!1ses!2spe"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </SectionContactMaps>
        </SectionContactStyled>
    )
}