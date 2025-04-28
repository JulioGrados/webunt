import styled from "styled-components";

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 500px;
  background: url('/static/img/unt.png') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 100px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  color: white;
  font-size: 50px;
  font-weight: bold;
  max-width: 90%;
`;

const SeccionImagen = () => {
    return (
      <Section>
        <Overlay />
        <Content>
          DIRECCIÓN DE INNOVACIÓN Y <br /> TRANSFERENCIA TECNOLÓGICA
        </Content>
      </Section>
    );
}

export default SeccionImagen