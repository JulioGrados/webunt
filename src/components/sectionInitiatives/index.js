import { ArrowBetween } from "../arrowBetween"
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
    },
    {
        name: 'Assesment',
        img: 'assesment.png',
        supported: 'Inha university',
        text: 'Programa de formación académica en emprendimiento e innovación de la UNT. Programa de formación académica en emprendimiento e innovación de la UNT.',
        supporimg: 'resp-assesment.png'
    }
]
const SectionInitiatives = () => {
    return (
        <SectionInitiativesStyled>
            <Title text={'Iniciativas para la sostenibilidad'} left={false} />
            <InitiativeContent>
                <InitiativesList>
                {initiatives.map((initiative, index) => (
                    <React.Fragment key={index}>
                    <Initiative
                        index={index}
                        name={initiative.name}
                        img={initiative.img}
                        supported={initiative.supported}
                        text={initiative.text}
                        supporimg={initiative.supporimg}
                    />
                    </React.Fragment>
                ))}
                </InitiativesList>
            </InitiativeContent>
        </SectionInitiativesStyled>
    )
}

export default SectionInitiatives