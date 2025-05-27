import GroupImage from "../groupImg"
import { CheckIcon } from "../icons/check"
import { Program } from "../program"
import Title from "../title"
import { ProgramContent, ProgramRecatangle, ProgramsSectionStyled, UsSectionContent, UsSectionContentButton, UsSectionContentItem, UsSectionContentItemText, UsSectionContentItemTextBold, UsSectionContentList, UsSectionContentText, UsSectionStyled } from "./styles"

const UsSection = () => {
    return (
        <UsSectionStyled>
            <GroupImage img1={`/static/img/IMG_1.jpg`} img2={`/static/img/IMG_3.jpg`} img3={`/static/img/IMG_4.jpg`} img4={`/static/img/IMG_2.jpg`} />
            <UsSectionContent>
                <Title text={'Conoce nuestros programas de innovación'} left={true} />
                <UsSectionContentList>
                    <UsSectionContentItem>
                        <CheckIcon />
                        <UsSectionContentItemText>
                            <UsSectionContentItemTextBold>INCUBANGEL.</UsSectionContentItemTextBold> Programa para el fomento y desarrollo de la red de inversionistas ángeles de la UNT.
                        </UsSectionContentItemText>
                    </UsSectionContentItem>
                    <UsSectionContentItem>
                        <CheckIcon />
                        <UsSectionContentItemText>
                            <UsSectionContentItemTextBold>INCUBACADEMY.</UsSectionContentItemTextBold> Programa de formación académica en emprendimiento e innovación de la UNT.
                        </UsSectionContentItemText>
                    </UsSectionContentItem>
                    <UsSectionContentItem>
                        <CheckIcon />
                        <UsSectionContentItemText>
                            <UsSectionContentItemTextBold>INCUBASSESSMENT.</UsSectionContentItemTextBold>. Programa para la identificación de desafíos empresariales del sector productivo y desarrollo de proyectos de innovación.
                        </UsSectionContentItemText>
                    </UsSectionContentItem>
                </UsSectionContentList>
                <UsSectionContentButton href='/contactanos'>
                    Contáctanos
                </UsSectionContentButton>
            </UsSectionContent>
        </UsSectionStyled>
    )
}

export default UsSection