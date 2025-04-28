import { CycleIcon } from "../icons/cycle"
import Initiative from "../initiatives"
import Title from "../title"
import { InitiativeContent, InitiativeIcon, InitiativeItem, InitiativesList, SectionInitiativesStyled } from "./styles"

const initiatives = [
    {
        name: 'Academy',
        img: 'academy.png',
        supported: 'Inha university',
        text: 'Programa de formación académica en emprendimiento e innovación de la UNT. Programa de formación académica en emprendimiento e innovación de la UNT.',
        supporimg: 'resp-academy.png'
    },
    {
        name: 'Angel',
        img: 'angel.png',
        supported: 'Inha university',
        text: 'Programa de formación académica en emprendimiento e innovación de la UNT. Programa de formación académica en emprendimiento e innovación de la UNT.',
        supporimg: 'resp-angel.jpeg'
    }
]

const initiative = {
    name: 'Assesment',
    img: 'assesment.png',
    supported: 'Inha university',
    text: 'Programa de formación académica en emprendimiento e innovación de la UNT. Programa de formación académica en emprendimiento e innovación de la UNT.',
    supporimg: 'resp-assesment.png'
}

const SectionInitiatives = () => {
    return (
        <SectionInitiativesStyled>
            <Title text={'Iniciativas para la sostenibilidad'} left={false} />
            <InitiativeContent>
                <InitiativesList>
                    {
                        initiatives.map((initiative, index) => (
                            <Initiative key={index} index={index} name={initiative.name} img={initiative.img} supported={initiative.supported} text={initiative.text} supporimg={initiative.supporimg} />
                        ))
                    }
                </InitiativesList>
                <InitiativeIcon>
                    <CycleIcon />
                </InitiativeIcon>
                <InitiativeItem>
                    <Initiative index={2} img={initiative.img} supported={initiative.supported} name={initiative.name} text={initiative.text} supporimg={initiative.supporimg} margin={false} />
                </InitiativeItem>
            </InitiativeContent>
        </SectionInitiativesStyled>
    )
}

export default SectionInitiatives