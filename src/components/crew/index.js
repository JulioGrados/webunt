// components/Equipo.js
import styled from "styled-components";

const Section = styled.section`
  padding: 100px 0;
  background-color: #fff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Label = styled.h4`
  color: #f39c12;
  font-size: 1rem;
  font-weight: 700;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #2d3436;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
`;

const Photo = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Info = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #00BF63;
  color: white;
  padding: 1rem;
  font-size: 0.9rem;
  line-height: 1.3;
`;

const Name = styled.div`
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

export default function Crew() {
  const personas = [
    {
      nombre: "Dra. Carmen Ayala",
      rol: "Directora de Innovación y Transferencia Tecnológica",
      imagen: "/static/img/team1.jpg",
    },
    {
      nombre: "Mg. Cesar Jáuregui",
      rol: "Coordinador Administrativo de proyectos",
      imagen: "/static/img/team6.jpg",
    },
    {
      nombre: "Ing. Carlos Palacios",
      rol: "Coordinador Técnico del proyecto INCUBAUNT 2.0",
      imagen: "/static/img/team2.jpg",
    },
    {
      nombre: "Ing. Junior Solórzano",
      rol: "Especialista en Emprendimiento e Innovación",
      imagen: "/static/img/crew4.jpg",
    },
    {
      nombre: "Econ. Susy Liz Ortega",
      rol: "Especialista de Innovación",
      imagen: "/static/img/crew5.jpg",
    },
    {
      nombre: "Ing. Junior Iván Cotrina",
      rol: "Especialista en Propiedad Intelectual",
      imagen: "/static/img/crew6.jpg",
    },
    {
      nombre: "Ing. Carlos Vergara",
      rol: "Asistente Técnico de Proyectos",
      imagen: "/static/img/crew7.png",
    },
  ];

  return (
    <Section>
      <Container>
        <Label>EQUIPO</Label>
        <Title>Conozca a nuestros expertos</Title>
        <Grid>
          {personas.map((persona, index) => (
            <Card key={index}>
              <Photo src={persona.imagen} alt={persona.nombre} />
              <Info>
                <Name>{persona.nombre}</Name>
                <div>{persona.rol}</div>
              </Info>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}