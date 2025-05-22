import { useInitiatives } from "../../hooks"
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
        text: 'Programa de formación académica en emprendimiento e innovación de la UNT, con el respaldo de Inha University',
        supporimg: 'resp-academy.png'
    },
    {
        name: 'Angel',
        img: 'angel.png',
        supported: 'The Board',
        text: 'Programa para el fomento y desarrollo de la red de inversionistas ángeles de la UNT con el respaldo de The Board.',
        supporimg: 'resp-angel.jpeg'
    },
    {
        name: 'Assesment',
        img: 'assesment.png',
        supported: 'Wayra',
        text: 'Programa para la identificación de desafíos empresariales del sector productivo y desarrollo de proyectos de innovación con el respaldo de Wayra.',
        supporimg: 'resp-assesment.png'
    }
]
const SectionInitiatives = () => {
    const {list} = useInitiatives({})
    return (
        <SectionInitiativesStyled>
            <Title text={'Iniciativas para la sostenibilidad'} left={false} />
            <InitiativeContent>
                <InitiativesList>
                {list.map((initiative, index) => (
                    <React.Fragment key={index}>
                    <Initiative
                        index={index}
                        name={initiative.name}
                        img={initiative.backImage}
                        supported={initiative.back}
                        text={initiative.description}
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