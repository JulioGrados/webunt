import {Canvas, Column, Box, Title, SplitColumn, Task, BottomRow, HalfBox} from './styles'
const BMCLayout = () => (
    <>
    <Canvas>
      {/* Primera fila */}
      <Column>
        <Box><Title>Key Partners</Title></Box>
      </Column>

      <Column>
        <SplitColumn>
          <Box medium><Title>Key Activities</Title></Box>
          <Box medium><Title>Key Resources</Title></Box>
        </SplitColumn>
      </Column>

      <Column>
        <Box>
          <Title>Value Propositions</Title>
          <Task>Propuesta de Valor 1</Task>
        </Box>
      </Column>

      <Column>
        <SplitColumn>
          <Box medium><Title>Customer Relationships</Title><Task>CR 1</Task></Box>
          <Box medium><Title>Channels</Title></Box>
        </SplitColumn>
      </Column>

      <Column>
        <Box><Title>Customer Segments</Title><Task>Segmento 1</Task></Box>
      </Column>
    </Canvas>

    {/* Segunda fila fuera del grid */}
    <BottomRow>
      <HalfBox><Title>Cost Structure</Title></HalfBox>
      <HalfBox><Title>Revenue Streams</Title></HalfBox>
    </BottomRow>
  </>
  );
  
  export default BMCLayout;