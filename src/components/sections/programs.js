import UnidadesLeft from '../unity/left'
import UnidadesRight from '../unity/rigth'
import { Program } from "../program"
import Title from "../title"
import UnitSection  from '../unity'
import { ProgramContent, ProgramRecatangle, ProgramsSectionStyled, Section } from "./styles"

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
            <Title text={'Nuestros programas de innovación'} left={false} />
            <UnitSection />
        </ProgramsSectionStyled>
    )
}

export default ProgramsSection