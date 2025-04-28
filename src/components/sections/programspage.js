import { Program } from "../program"
import Title from "../title"
import { ProgramContent, ProgramPageButton, ProgramPageContent, ProgramPageText, ProgramPageTitle, ProgramRecatangle, ProgramsPageFigure, ProgramsPageImg, ProgramsPageItem, ProgramsPageLogo, ProgramsPageLogoImg, ProgramsPageSectionStyled } from "./styles"

const programs = [
    {
        name: 'Innova',
        description: 'Programa de formación de emprendedores en validación    de ideas de negocios innovadoras.',
        img: 'innova.png'
    },
    {
        name: 'Escala',
        description: 'Programa de acompañamiento a emprendimientos innovadores  para lograr su inserción en el mercado, mejorando su proyección.',
        img: 'escala.png'
    },
    {
        name: 'Acelera',
        description: 'Programa de asistencia técnica a emprendedores que cuenten con un producto o servicio validado y estén en la búsqueda de crecimiento y expansión hacia nuevos mercados.',
        img: 'acelera.png'
    }
]

const ProgramsPageSection = () => {
    return (
        <ProgramsPageSectionStyled>
            <ProgramsPageItem>
                <ProgramsPageFigure>
                    <ProgramsPageImg src={'/static/img/programas1.jpg'} alt="img"/>
                    <ProgramsPageLogo>
                        <ProgramsPageLogoImg src={'/static/img/innovapage.png'} />
                    </ProgramsPageLogo>
                </ProgramsPageFigure>
                <ProgramPageContent>
                    <ProgramPageTitle>
                        Pre - Incubación
                    </ProgramPageTitle>
                    <ProgramPageText>
                        Se desarrollan talleres de capacitación orientados a definir el problema que soluciona su propuesta de valor y que beneficios le aporta al segmento de cliente seleccionado.
                        Incluye mentorías grupales y material didáctico.
                    </ProgramPageText>
                    <ProgramPageButton>
                        Contactanos
                    </ProgramPageButton>
                </ProgramPageContent>
            </ProgramsPageItem>
            <ProgramsPageItem>
                <ProgramPageContent right>
                    <ProgramPageTitle>
                        Incubación
                    </ProgramPageTitle>
                    <ProgramPageText>
                        Se realiza un acompañamiento y soporte técnico durante el proceso de validación de su propuesta de valor, hasta obtener un MVP antes de lanzarlo al mercado.
                        Incluyen capacitaciones grupales, Mentorías personalizadas y acceso a fuentes de financiamiento.
                    </ProgramPageText>
                    <ProgramPageButton>
                        Contactanos
                    </ProgramPageButton>
                </ProgramPageContent>
                <ProgramsPageFigure>
                    <ProgramsPageImg src={'/static/img/home2.jpg'} alt="img"/>
                    <ProgramsPageLogo>
                        <ProgramsPageLogoImg src={'/static/img/escalapage.png'} />
                    </ProgramsPageLogo>
                </ProgramsPageFigure>
            </ProgramsPageItem>
            <ProgramsPageItem>
                <ProgramsPageFigure>
                    <ProgramsPageImg src={'/static/img/home2.jpg'} alt="img"/>
                    <ProgramsPageLogo>
                        <ProgramsPageLogoImg src={'/static/img/acelerapage.png'} />
                    </ProgramsPageLogo>
                </ProgramsPageFigure>
                <ProgramPageContent>
                    <ProgramPageTitle>
                        Aceleración
                    </ProgramPageTitle>
                    <ProgramPageText>
                        Se realiza una evaluación previa del emprendimiento para identificar su potencial para escalar, durante el programa se busca conectar sus propuestas de valor con potenciales clientes, inversores y acceso a nuevos mercados.
                        Incluyen capacitación especializada, mentorías personalizadas, asesorías específicas y acceso a fuentes de financiamiento.
                    </ProgramPageText>
                    <ProgramPageButton>
                        Contactanos
                    </ProgramPageButton>
                </ProgramPageContent>
            </ProgramsPageItem>
        </ProgramsPageSectionStyled>
    )
}

export default ProgramsPageSection