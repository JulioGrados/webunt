import {UnidadesLeftStyled, Title, MainTitle, TopRow, LeftImage, TitleBox, BottomRow, RightImage, TextColumn, BottomRowBody} from './styles'

const UnidadesLeft = () => {
    return (
        <UnidadesLeftStyled>
        <TopRow>
            <LeftImage src="/static/img/digital1.jpg" alt="Imagen amplia" />
        </TopRow>
        <BottomRow>
                <TitleBox>
                    <Title>UNIDADES</Title>
                    <MainTitle>Propiedad Intelectual y Transferencia digital</MainTitle>
                </TitleBox>
                <BottomRowBody>
                    <RightImage src="/static/img/digital2.jpg" alt="Imagen rostro" />
                    <TextColumn>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                    </TextColumn>
                </BottomRowBody>
        </BottomRow>
        </UnidadesLeftStyled>
    );
}

export default UnidadesLeft