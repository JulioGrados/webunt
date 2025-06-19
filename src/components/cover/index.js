import { Container } from "../../styles/main"
import Header from "../header"
import { useRef, useEffect, useState } from 'react'
import { BackgroundVideo, Content, CoverButtonOne, CoverButtons, CoverButtonTwo, CoverContent, CoverStyled, CoverText, CoverTitle, Main, Overlay, VideoPlaceholder } from "./styles"

const Cover = () => {
    const [videoLoaded, setVideoLoaded] = useState(false)
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(error => {
            console.error('Error al reproducir el video:', error);
            });
        }
    }, []);
    const handleVideoLoaded = () => {
        setVideoLoaded(true)
        if (videoRef.current) {
          const playPromise = videoRef.current.play()
          if (playPromise !== undefined) {
            playPromise.catch(error => {
              console.warn("Reproducción automática bloqueada:", error)
            })
          }
        }
    }
    return (
        <CoverStyled>
            {!videoLoaded && (
                <VideoPlaceholder src="/static/img/home.png" alt="Placeholder" />
            )}
            <BackgroundVideo 
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                onLoadedData={handleVideoLoaded} // se ejecuta cuando el video está listo
                style={{ opacity: videoLoaded ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
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