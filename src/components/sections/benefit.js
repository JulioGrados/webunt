import GroupImageBenefit from "../groupImg/benefit"
import GroupImage from "../groupImg"
import { CheckIcon } from "../icons/check"
import { Program } from "../program"
import Title from "../title"
import { ProgramContent, ProgramRecatangle, ProgramsSectionStyled, UsBenefitContent, UsSectionContent, UsSectionContentItem, UsSectionContentItemText, UsSectionContentItemTextBold, UsBenefitContentList, UsSectionContentText, UsSectionStyled, UsSectionContentButton } from "./styles"

const programs = [
    {
        name: 'Innova',
        description: 'Programa de formación de emprendedores en validación    de ideas de negocios innovadoras.',
        img: 'innova.png'
    },
    {
        name: 'Escala',
        description: 'Programa de acompañamiento a emprendimientos innovadores  para lograr su inserción en el mercado, mejorando su proyección.',
        img: 'escala.png'
    },
    {
        name: 'Acelera',
        description: 'Programa de asistencia técnica a emprendedores que cuenten con un producto o servicio validado y estén en la búsqueda de crecimiento y expansión hacia nuevos mercados.',
        img: 'acelera.png'
    }
]

const BenefitSection = () => {
    return (
        <UsSectionStyled>
            <UsBenefitContent>
                <Title text={'Beneficios de nuestra incubadora'} left={true} />
                <UsBenefitContentList>
                    <UsSectionContentItem>
                        <CheckIcon />
                        <UsSectionContentItemText>
                            Formación Técnica y capacitaciones en emprendimiento e Innovación.
                        </UsSectionContentItemText>
                    </UsSectionContentItem>
                    <UsSectionContentItem>
                        <CheckIcon />
                        <UsSectionContentItemText>
                            Herramientas de desarrollo y creación.
                        </UsSectionContentItemText>
                    </UsSectionContentItem>
                    <UsSectionContentItem>
                        <CheckIcon />
                        <UsSectionContentItemText>
                            Acompañamiento técnico para la generación de nuevos modelos de negocio.
                        </UsSectionContentItemText>
                    </UsSectionContentItem>
                    <UsSectionContentItem>
                        <CheckIcon />
                        <UsSectionContentItemText>
                            Acceso a fuentes de financiamiento y networking.
                        </UsSectionContentItemText>
                    </UsSectionContentItem>
                    <UsSectionContentItem>
                        <CheckIcon />
                        <UsSectionContentItemText>
                            Asesorías personalizadas para impulsar el crecimiento y escalabilidad del emprendimiento.
                        </UsSectionContentItemText>
                    </UsSectionContentItem>
                </UsBenefitContentList>
                <UsSectionContentButton>
                    Contactanos
                </UsSectionContentButton>
            </UsBenefitContent>
            <GroupImageBenefit img1={`/static/img/IMG_1.jpg`} img2={`/static/img/IMG_3.jpg`} img3={`/static/img/IMG_4.jpg`} img4={`/static/img/IMG_2.jpg`} />
            {/* <GroupImageBenefit img1={`/static/img/IMG_1.jpg`} img2={`/static/img/IMG_3.jpg`} img3={`/static/img/IMG_4.jpg`} img4={`/static/img/IMG_2.jpg`} /> */}
        </UsSectionStyled>
    )
}

export default BenefitSection