import TaskItem from '../task';
import {Canvas, Column, Box, Title, SplitColumn, Task, BottomRow, HalfBox} from './styles'
const BMCLayout = () => (
    <>
    <Canvas>
      {/* Primera fila */}
      <Column>
        <Box><Title>Socios clave</Title></Box>
      </Column>

      <Column>
        <SplitColumn>
          <Box medium><Title>Actividades clave</Title></Box>
          <Box medium><Title>Recursos clave</Title></Box>
        </SplitColumn>
      </Column>

      <Column>
        <Box>
          <Title>Propuestas de valor</Title>
          <TaskItem></TaskItem>
        </Box>
      </Column>

      <Column>
        <SplitColumn>
          <Box medium><Title>Relaciones con los clientes</Title><Task>CR 1</Task></Box>
          <Box medium><Title>Canales</Title></Box>
        </SplitColumn>
      </Column>

      <Column>
        <Box><Title>Segmentos de clientes</Title><Task>Segmento 1</Task></Box>
      </Column>
    </Canvas>

    {/* Segunda fila fuera del grid */}
    <BottomRow>
      <HalfBox><Title>Estructura de costos</Title></HalfBox>
      <HalfBox><Title>Flujos de ingresos</Title></HalfBox>
    </BottomRow>
  </>
  );
  
  export default BMCLayout;