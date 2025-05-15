import { Container } from "../../styles/main"
import Header from "../header"
import { LowIcon } from "../icons/low"
import { useRef, useEffect } from 'react'
import { BackgroundVideo, Content, CoverButtonOne, CoverButtons, CoverButtonTwo, CoverCircle, CoverContent, CoverImg1, CoverImg2, CoverImg3, CoverStyled, CoverText, CoverTitle, CoverWelcome, Main, Overlay } from "./styles"

const Cover = () => {
    const videoRef = useRef(null);

    useEffect(() => {
    if (videoRef.current) {
        videoRef.current.muted = true;
        videoRef.current.play().catch(error => {
        console.error('Error al reproducir el video:', error);
        });
    }
    }, []);
    return (
        <CoverStyled>
            <BackgroundVideo 
                ref={videoRef}
                autoplay 
                muted 
                loop 
                playsinline
            >
                <source src={`/static/img/home.mp4`} type="video/mp4" />
                
            </BackgroundVideo>
            <Overlay />
            <Content>
                <Header />
                <Main>  
                    <Container>
                        <CoverContent>
                            <CoverTitle>
                                Fomentamos StartUps de Alto Impacto
                            </CoverTitle>
                            <CoverText>
                                Nuestro objetivo es que más emprendedores de La Libertad y el Perú, encuentren el camino del éxito. 
                            </CoverText>
                            <CoverButtons>
                                <CoverButtonOne href='/signup'>
                                    Iniciar Sesión
                                </CoverButtonOne>
                                <CoverButtonTwo>
                                    Contactanos
                                </CoverButtonTwo>
                            </CoverButtons>
                        </CoverContent>
                    </Container>
                </Main>
            </Content>
            {/*  */}
        </CoverStyled>
    )
}

export default Cover