import HeaderDitt from '../header/ditt';
import {HeroSection, HeroContent} from './styles'

const Hero = () => {
    return (
        <HeroSection>
            <HeaderDitt />
            <HeroContent>
                <h1>Dirección de Innovación y Transferencia Tecnológica</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <button>Contáctanos</button>
            </HeroContent>
        </HeroSection>
    );
}

export default Hero