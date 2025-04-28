import { CycleIcon } from "../icons/cycle"
import Initiative from "../initiatives"
import InitiativeOther from "../initiatives/other"
import Title from "../title"
import { InitiativeContent, InitiativeIcon, InitiativeItem, InitiativesList, SectionInitiativesPageStyled } from "./styles"

const initiatives = [
    {
        name: 'Academy',
        img: 'academy.png',
        supported: 'Inha university',
        text: 'Programa de formación académica en emprendimiento e innovación de la UNT.',
        supporimg: 'resp-academy.png'
    },
    {
        name: 'Angel',
        img: 'angel.png',
        supported: 'Inha university',
        text: 'Programa de formación académica en emprendimiento e innovación de la UNT.',
        supporimg: 'resp-angel.jpeg'
    },
    {
        name: 'Assesment',
        img: 'assesment.png',
        supported: 'Inha university',
        text: 'Programa de formación académica en emprendimiento e innovación de la UNT.',
        supporimg: 'resp-assesment.png'
    }
]

const SectionInitiativesPage = () => {
    return (
        <SectionInitiativesPageStyled>
            {
                initiatives.map((initiative, index) => (
                    <InitiativeOther key={index} index={index} img={initiative.img} supported={initiative.supported} text={initiative.text} supporimg={initiative.supporimg} name={initiative.name} width />
                ))
            }
        </SectionInitiativesPageStyled>
    )
}

export default SectionInitiativesPage