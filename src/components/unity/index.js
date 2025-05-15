import { Section, Card, Overlay, Content, Title, Description, Button } from "./styles"
const cards = [
    {
      title: 'Incuba Innova',
      description: 'Programa enfocado en la validación inicial de ideas y descubrimiento de oportunidades.',
      bg: '/static/img/IMG_1.jpg',
    },
    {
      title: 'Incuba Escala',
      description: 'Diseñado para startups que están listas para escalar su modelo validado.',
      bg: '/static/img/IMG_2.jpg',
    },
    {
      title: 'Incuba Acelera',
      description: 'Enfocado en acelerar el crecimiento con conexiones, inversión y mentoría.',
      bg: '/static/img/IMG_3.jpg',
    },
];

const UnitSection = () => {
    return (
      <Section>
        {cards.map((card, index) => (
          <Card key={index} bg={card.bg}>
            <Overlay />
            <Content>
              <Title>{card.title}</Title>
              <Description>{card.description}</Description>
              <Button href='/programas'>Conoce más</Button>
            </Content>
          </Card>
        ))}
      </Section>
    );
  };
  
export default UnitSection;