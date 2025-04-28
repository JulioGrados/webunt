import Ally from "../ally"
import Title from "../title"
import { TestimoniesList, TestimoniesSectionStyled } from "./styles"

const testimonies = [
    {
        img: 'aliado1.png'
    },
    {
        img: 'aliado2.png'
    },
    {
        img: 'aliado3.png'
    },
    {
        img: 'aliado4.png'
    },
    {
        img: 'aliado5.png'
    },
    {
        img: 'aliado6.png'
    },
    {
        img: 'aliado7.png'
    },
    {
        img: 'aliado8.png'
    },
    {
        img: 'aliado9.png'
    }
]

const TestimoniesSection = () => {
    return (
        <TestimoniesSectionStyled>
            <Title text={'Nuestros aliados'} left={false} />
            <TestimoniesList>
                {
                    testimonies.map(testimonie => (
                        <Ally img={testimonie.img} />
                    ))
                }
            </TestimoniesList>
        </TestimoniesSectionStyled>
    )
}

export default TestimoniesSection