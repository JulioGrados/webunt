import { FaRocket, FaThumbsUp, FaThumbsDown, FaRegThumbsUp } from 'react-icons/fa';
import { Header, Meta, Reactions, TaskCard, TaskTitle } from './styles';
import FlaskIcon from './rocket';

const TaskItem = () => (
    <TaskCard>
      <Header>
        <TaskTitle>Propuesta de Valor 1</TaskTitle>
        <FlaskIcon />
      </Header>
      <Meta>2022-04-04 / Marcos Agurto Evangelista</Meta>
      <Reactions>
        <span><FaThumbsUp color="#00bcd4" /> 0</span>
        <span><FaRegThumbsUp /> 0</span>
        <span><FaThumbsDown color="#f44336" /> 0</span>
      </Reactions>
    </TaskCard>
);
  
export default TaskItem;