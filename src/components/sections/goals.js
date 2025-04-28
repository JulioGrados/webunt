import Goal from "../goal"
import Title from "../title"
import { GoalsList, GoalsSectionStyled } from "./styles"

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

const GoalsSection = () => {
    return (
        <GoalsSectionStyled>
            <Title text={'Metas cumplidas'} left={false} color={'#fff'} />
            <GoalsList>
                {
                    goals.map((goal, index) => (
                        <Goal key={index} img={goal.img} number={goal.number} text={goal.text} index={index} />
                    ))
                }
            </GoalsList>
        </GoalsSectionStyled>
    )
}

export default GoalsSection