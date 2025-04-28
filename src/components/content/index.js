import { Program } from "../program"
import Title from "../title"
import { ProgramsList, SectionContentStyled, SectionContentText } from "./styles"

const programs = [
    {
        name: 'Innova IncubaUNT',
        text: 'Programa de formación de emprendedores en validación    de ideas de negocios innovadoras.',
        img: 'innova.png'
    },
    {
        name: 'Escala IncubaUNT',
        text: 'Programa de acompañamiento a emprendimientos innovadores  para lograr su inserción en el mercado, mejorando su proyección.',
        img: 'escala.png'
    },
    {
        name: 'Acelera IncubaUNT',
        text: 'Programa de asistencia técnica a emprendedores que cuenten con un producto o servicio validado y estén en la búsqueda de crecimiento y expansión hacia nuevos mercados.',
        img: 'acelera.png'
    }
]

const SectionContent = () => {
    return (
        <SectionContentStyled>
            <Title text={'Conoce nuestros programas de innovación'} left={true} />
            <SectionContentText>
                Somos la Incubadora de empresas de la Universidad Nacional de Trujillo que desde el 2016, viene impulsando el desarrollo del emprendimiento e innovación a través de programas, capacitaciones, soporte y asesoría a los emprendedores de la región y el país.
            </SectionContentText>
            <ProgramsList>
                {
                    programs.map(program => (
                        <Program name={program.name} text={program.text} img={program.img} />
                    ))
                }
            </ProgramsList>
        </SectionContentStyled>
    )
}

export default SectionContent