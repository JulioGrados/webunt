import { Container } from "../../styles/main"
import Header from "../header"
import { useRef, useEffect } from 'react'
import { BackgroundVideo, Content, CoverButtonOne, CoverButtons, CoverButtonTwo, CoverContent, CoverStyled, CoverText, CoverTitle, Main, Overlay } from "./styles"

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
                                Nuestro propósito es impulsar a más emprendedores de La Libertad y del Perú a descubrir y recorrer el camino hacia el éxito.
                            </CoverText>
                            <CoverButtons>
                                <CoverButtonOne href='/login'>
                                    Iniciar Sesión
                                </CoverButtonOne>
                                <CoverButtonTwo>
                                    Contáctanos
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