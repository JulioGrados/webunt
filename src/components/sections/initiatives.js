import { useInitiatives } from "../../hooks"
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
        supported: 'The Board',
        text: 'Programa de formación académica en emprendimiento e innovación de la UNT.',
        supporimg: 'resp-angel.jpeg'
    },
    {
        name: 'Assesment',
        img: 'assesment.png',
        supported: 'Wayra',
        text: 'Programa de formación académica en emprendimiento e innovación de la UNT.',
        supporimg: 'resp-assesment.png'
    }
]

const SectionInitiativesPage = () => {
    const { list } = useInitiatives({})
    return (
        <SectionInitiativesPageStyled>
            {
                list.map((initiative, index) => (
                    <InitiativeOther key={index} index={index} 
                        img={initiative.backImage} 
                        supported={initiative.back} 
                        text={initiative.description} 
                        supporimg={initiative.backImage} 
                        name={initiative.name} 
                        char1={initiative.char1}
                        char2={initiative.char2}
                        char3={initiative.char3}
                        char4={initiative.char4}
                        width 
                    />
                ))
            }
        </SectionInitiativesPageStyled>
    )
}

export default SectionInitiativesPage