import CoverOther from '../../components/cover/others'
import Footer from '../../components/footer'
import HeadPage from '../../components/head'
import PortfolioSection from '../../components/sections/portfolio'
import { Container, Section, SectionImg, SectionItem, SectionTitle, Trama1, Trama2, Trama3, Trama4 } from '../../styles/main'

const UsUnt = () => {

    return (
        <>
            <HeadPage 
                title={'INCUBAUNT - Portafolio'} 
                description={'¡Formando startups de alto impacto!. Visita a detalle nuestra página web y nuestras redes sociales.'} 
            />
            <CoverOther title={'Portafolio'} />
            <Section>
                <Container>
                    <SectionItem>
                        <PortfolioSection />
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