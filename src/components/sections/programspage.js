import { usePrograms } from "../../hooks"
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
    const { list } = usePrograms()
    return (
        <ProgramsPageSectionStyled>
            {
                list.map((item, index) => (
                        (index % 2 !== 0) ? (
                            <ProgramsPageItem>
                                <ProgramPageContent right>
                                    <ProgramPageTitle>
                                        {item.name}
                                    </ProgramPageTitle>
                                    <ProgramPageText>
                                        {item.description}
                                    </ProgramPageText>
                                    <ProgramPageButton href='/contactanos'>
                                        Contactanos
                                    </ProgramPageButton>
                                </ProgramPageContent>
                                <ProgramsPageFigure>
                                    <ProgramsPageImg src={'http://localhost:8001' + item.image} alt="img"/>
                                    <ProgramsPageLogo>
                                        <ProgramsPageLogoImg src={'http://localhost:8001' + item.logo}  />
                                    </ProgramsPageLogo>
                                </ProgramsPageFigure>
                            </ProgramsPageItem>
                        ) : (
                            <ProgramsPageItem>
                                <ProgramsPageFigure>
                                    <ProgramsPageImg src={'http://localhost:8001' + item.image} alt="img"/>
                                    <ProgramsPageLogo>
                                        <ProgramsPageLogoImg src={'http://localhost:8001' + item.logo}  />
                                    </ProgramsPageLogo>
                                </ProgramsPageFigure>
                                <ProgramPageContent>
                                    <ProgramPageTitle>
                                        {item.name}
                                    </ProgramPageTitle>
                                    <ProgramPageText>
                                        {item.description}
                                    </ProgramPageText>
                                    <ProgramPageButton href='/contactanos'>
                                        Contactanos
                                    </ProgramPageButton>
                                </ProgramPageContent>
                            </ProgramsPageItem>
                        )
                ))
            }
        </ProgramsPageSectionStyled>
    )
}

export default ProgramsPageSection