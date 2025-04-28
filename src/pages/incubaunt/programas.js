import CoverOther from '../../components/cover/others'
import Footer from '../../components/footer'
import HeadPage from '../../components/head'
import Header from '../../components/header'
import PortfolioSection from '../../components/sections/portfolio'
import ProgramsPageSection from '../../components/sections/programspage'
import { Container, Section, SectionImg, SectionItem, SectionTitle, Trama1, Trama2, Trama3, Trama4 } from '../../styles/main'

const UsUnt = () => {

    return (
        <>
            <HeadPage title={'INCUBAUNT - Programas'} description={'¡Formando startups de alto impacto!. Visita a detalle nuestra página web y nuestras redes sociales.'} />
            <CoverOther title={'Programas'} />
            <Section>
                <Container>
                    <SectionItem>
                        <ProgramsPageSection />
                    </SectionItem>
                </Container>
            </Section>
            <Section bottom>
                <Container>
                    <SectionItem>
                        <Footer />
                    </SectionItem>
                </Container>
            </Section>
        </>
    )
} 
export default UsUnt