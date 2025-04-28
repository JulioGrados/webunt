import CarruselAutoplay from "../carousel"
import Goal from "../goal"
import Title from "../title"
import { GoalsList, MentorsSectionStyled } from "./styles"

const goals = [
    {
        img: 'goals1.png',
        number: '39',
        text: 'Emprendimientos en etapa comercial capacitados'
    },
    {
        img: 'goals2.png',
        number: '26',
        text: 'Emprendimientos activos'
    },
    {
        img: 'goals3.png',
        number: '17',
        text: 'StartUps con financiamiento'
    },
    {
        img: 'goals4.png',
        number: '+1K',
        text: 'Estudiantes y emprendedores capacitados'
    }
]

const MentorsSection = () => {
    return (
        <MentorsSectionStyled>
            <Title text={'Nuestros mentores'} left={false} />
            <CarruselAutoplay />
        </MentorsSectionStyled>
    )
}

export default MentorsSection