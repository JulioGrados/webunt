import { Program } from "../program"
import Title from "../title"
import { ProgramContent, ProgramRecatangle, ProgramsSectionStyled } from "./styles"

const programs = [
    {
        name: 'Innova',
        description: 'Programa de formación de emprendedores en validación.',
        img: 'innova.png'
    },
    {
        name: 'Escala',
        description: 'Programa de acompañamiento a emprendimientos innovadores.',
        img: 'escala.png'
    },
    {
        name: 'Acelera',
        description: 'Programa de asistencia técnica a emprendedores que cuenten con un producto.',
        img: 'acelera.png'
    }
]

const ProgramsSection = () => {
    return (
        <ProgramsSectionStyled>
            <Title text={'Conoce nuestros programas de innovación'} left={false} />
            <ProgramContent>
                <Program name={programs[0].name} description={programs[0].description} img={programs[0].img} margin={'220px'} />
                <ProgramRecatangle margin={'290px'}/>
                <Program name={programs[1].name} description={programs[1].description} img={programs[1].img} margin={'105px'} />
                <ProgramRecatangle margin={'175px'} />
                <Program name={programs[2].name} description={programs[2].description} img={programs[2].img} margin={'0px'} />
            </ProgramContent>
        </ProgramsSectionStyled>
    )
}

export default ProgramsSection