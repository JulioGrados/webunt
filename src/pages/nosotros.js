import SectionContent from '../components/content'
import Cover from '../components/cover'
import CoverOther from '../components/cover/others'
import Footer from '../components/footer'
import GroupImage from '../components/groupImg'
import HeadPage from '../components/head'
import Header from '../components/header'
import SectionInitiatives from '../components/sectionInitiatives'
import BenefitSection from '../components/sections/benefit'
import GoalsSection from '../components/sections/goals'
import MentorsSection from '../components/sections/mentors'
import TeamSection from '../components/sections/team'
import TestimoniesSection from '../components/sections/testimonies'
import UsSection from '../components/sections/us'
import { Container, Section, SectionImg, SectionItem, SectionTitle, Trama1, Trama2, Trama3, Trama4 } from '../styles/main'

const UsUnt = () => {

    return (
        <>
            <HeadPage title={'INCUBAUNT - Nosotros'} description={'¡Formando startups de alto impacto!. Visita a detalle nuestra página web y nuestras redes sociales.'} />
            {/* <Header white={true}/> */}
            <CoverOther title={'Nosotros'} />
            <Section>
                <Container>
                    <SectionItem>
                        <UsSection />
                    </SectionItem>
                </Container>
            </Section>
            <Section>
                <Container>
                    <SectionItem>
                        <BenefitSection />
                    </SectionItem>
                </Container>
            </Section>
            <Section>
                <Container>
                    <SectionItem>
                        <TeamSection />
                    </SectionItem>
                </Container>
            </Section>
            <Section>
                <Container>
                    <SectionItem>
                        <MentorsSection />
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