import SectionContent from '../../components/content'
import Cover from '../../components/cover'
import Footer from '../../components/footer'
import GroupImage from '../../components/groupImg'
import HeadPage from '../../components/head'
import SectionInitiatives from '../../components/sectionInitiatives'
import GoalsSection from '../../components/sections/goals'
import ProgramsSection from '../../components/sections/programs'
import TestimoniesSection from '../../components/sections/testimonies'
import { Container, Section, SectionImg, SectionItem, Trama1, Trama2, Trama3, Trama4 } from '../../styles/main'

const Incubaunt = () => {

    return (
        <>
            <HeadPage title={'INCUBAUNT'} description={'¡Formando startups de alto impacto!. Visita a detalle nuestra página web y nuestras redes sociales.'} />
            <Cover />
            <Section>
                <Container>
                    <SectionItem>
                        <ProgramsSection />
                    </SectionItem>
                </Container>
            </Section>
            <Section>
                <Container>
                    <SectionItem>
                        <SectionInitiatives />
                    </SectionItem>
                </Container>
            </Section>
            <SectionImg>
                <Container>
                    <GoalsSection />
                </Container>
            </SectionImg>
            <Section>
                <Container>
                    <SectionItem>
                        <TestimoniesSection />
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
export default Incubaunt