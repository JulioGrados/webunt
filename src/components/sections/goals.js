import { useGoals } from "../../hooks"
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
    const { list } = useGoals({})
    console.log('list', list)
    return (
        <GoalsSectionStyled>
            <Title text={'Metas cumplidas'} left={false} color={'#fff'} />
            <GoalsList>
                {
                    list.map((goal, index) => (
                        <Goal key={index} img={goal.image} number={goal.number} description={goal.description} index={index} />
                    ))
                }
            </GoalsList>
        </GoalsSectionStyled>
    )
}

export default GoalsSection