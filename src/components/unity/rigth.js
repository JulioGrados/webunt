import {UnidadesLeftStyled, Title, MainTitle, TopRow, LeftImage, TitleBox, BottomRowRight, RightImage, TextColumnRight, BottomRowBody} from './styles'

const UnidadesRight = () => {
    return (
    <UnidadesLeftStyled>
        <BottomRowRight>
                <TitleBox>
                    <Title>UNIDADES</Title>
                    <MainTitle>Vinculación con Ecosistema Regional de Innovación</MainTitle>
                </TitleBox>
                <BottomRowBody>
                    <TextColumnRight>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                    </TextColumnRight>
                    <RightImage src="/static/img/digital2.jpg" alt="Imagen rostro" />
                </BottomRowBody>
        </BottomRowRight>
        <TopRow>
            <LeftImage src="/static/img/digital1.jpg" alt="Imagen amplia" />
        </TopRow>
    </UnidadesLeftStyled>
    );
}

export default UnidadesRight