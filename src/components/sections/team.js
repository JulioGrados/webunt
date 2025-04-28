import Ally from "../ally"
import { Team } from "../team"
import Title from "../title"
import { TeamList, TeamSectionStyled } from "./styles"

const team = [
    {
        img: 'team1.jpg',
        name: 'Dra. Carmen Ayala',
        rol: 'Coordinadora General del proyecto INCUBAUNT 2.0'
    },
    {
        img: 'team2.jpg',
        name: 'Ing. Carlos Palacios',
        rol: 'Coordinador Técnico del proyecto INCUBAUNT 2.0'
    },
    {
        img: 'team2.jpg',
        name: 'Mg. Cesar Jáuregui',
        rol: 'Coordinador Administrativo de proyectos'
    },
    {
        img: 'team4.png',
        name: 'Ing. Junior Solórzano',
        rol: 'Especialista en emprendimiento e Innovación.'
    },
    {
        img: 'team5.jpg',
        name: 'Ing. María del Pilar Chinchayán',
        rol: 'Asistente Administrativo del proyecto INCUBAUNT 2.0'
    },
    {
        img: 'team6.jpg',
        name: 'Ing. Carlos Vergara',
        rol: 'Asistente Técnico de Proyectos'
    }
]

const TeamSection = () => {
    return (
        <TeamSectionStyled>
            <Title text={'Nuestro equipo'} left={false} />
            <TeamList>
                {
                    team.map(item => (
                        <Team img={item.img} name={item.name} rol={item.rol} />
                    ))
                }
            </TeamList>
        </TeamSectionStyled>
    )
}

export default TeamSection