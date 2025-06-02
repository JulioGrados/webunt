import { usePortfolio } from "../../hooks"
import CarruselAutoplay from "../carousel"
import Goal from "../goal"
import { CheckIcon } from "../icons/check"
import { CheckSmallIcon } from "../icons/checksmall"
import Title from "../title"
import { GoalsList, PortafolioItemli, PortfolioItem, PortfolioItemFigure, PortfolioItemImg, PortfolioItemliContent, PortfolioItemliContentBold, PortfolioItemliContentText, PortfolioItemLink, PortfolioItemList, PortfolioItemTag, PortfolioItemText, PortfolioSectionStyled } from "./styles"
import { MEDIA_PATH } from 'utils/files/path'
const portfolio = [
    {
        img: 'portfolio1.avif',
        tipo: 'Aceleración',
        text: 'Somos una Start Up innovadora y de rápida adaptación a los mercados donde operamos. Nuestras operaciones son 100%…',
        fundation: '2017',
        team: '+6',
        url: 'https://mimercado.delivery/pages/mercado'
    },
    {
        img: 'portfolio2.webp',
        tipo: 'Aceleración',
        text: 'Somos una plataforma digital que permite a cualquier ciudadano recibir asesoría legal accesible y especializada para la …',
        fundation: '2017',
        team: '+6',
        url: 'https://legalado.com/'
    },
    {
        img: 'portfolio3.png',
        tipo: 'Aceleración',
        text: 'Somos una empresa Fintech que apostamos por generar inclusión financiera a través de la atención con nuestros …',
        fundation: '2017',
        team: '+6',
        url: 'https://aicredito.com/'
    },
    {
        img: 'portfolio4.png',
        tipo: 'Aceleración',
        text: 'A partir de tu CV y tu perfil, evaluamos tu capacidad potencial en lugar de tu experiencia para que ingresar al mercado …',
        fundation: '2017',
        team: '+6',
        url: 'https://laboral.ai/'
    },
    {
        img: 'portfolio5.png',
        tipo: 'Aceleración',
        text: 'Es una aplicación que te ayuda enormemente en tu preparación para el examen de ascenso de grado de la Policía …',
        fundation: '2017',
        team: '+6',
        url: 'https://asciendepnp.com/'
    },
    {
        img: 'portfolio6.svg',
        tipo: 'Aceleración',
        text: 'En Procero, estamos dedicados a impulsar la innovación en la industria de la construcción a través de nuestro …',
        fundation: '2017',
        team: '+6',
        url: 'https://procero.tech/'
    }
]

const PortfolioSection = () => {
    const { list } = usePortfolio({})
    console.log(list)
    return (
        <PortfolioSectionStyled>
            {
                list.map(item => (
                    <PortfolioItem>
                        <PortfolioItemFigure>
                            <PortfolioItemImg src={`${MEDIA_PATH}${item.image}`} />
                        </PortfolioItemFigure>
                        <PortfolioItemTag>{item.level}</PortfolioItemTag>
                        <PortfolioItemText>
                            {item.description}
                        </PortfolioItemText>
                        {/* <PortfolioItemList>
                            <PortafolioItemli>
                                <CheckSmallIcon />
                                <PortfolioItemliContent>
                                    <PortfolioItemliContentBold>
                                        Fundación:
                                    </PortfolioItemliContentBold>
                                    <PortfolioItemliContentText>
                                        {item.foundation}
                                    </PortfolioItemliContentText>
                                </PortfolioItemliContent>
                            </PortafolioItemli>
                            <PortafolioItemli>
                                <CheckSmallIcon />
                                <PortfolioItemliContent>
                                    <PortfolioItemliContentBold>
                                        Equipo:
                                    </PortfolioItemliContentBold>
                                    <PortfolioItemliContentText>
                                        {item.team}
                                    </PortfolioItemliContentText>
                                </PortfolioItemliContent>
                            </PortafolioItemli>
                            <PortafolioItemli>
                                <CheckSmallIcon />
                                <PortfolioItemliContent>
                                    <PortfolioItemliContentBold>
                                        Página web
                                    </PortfolioItemliContentBold>
                                    <PortfolioItemliContentText>
                                        {item.link}
                                    </PortfolioItemliContentText>
                                </PortfolioItemliContent>
                            </PortafolioItemli>
                        </PortfolioItemList> */}
                        <PortfolioItemLink href={item.link} target="_blank">
                            Ir a la página web
                        </PortfolioItemLink>
                    </PortfolioItem>
                ))
            }
        </PortfolioSectionStyled>
    )
}

export default PortfolioSection