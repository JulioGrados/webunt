import { FaRocket, FaThumbsUp, FaThumbsDown, FaRegThumbsUp } from 'react-icons/fa';
import { Header, Meta, Reactions, TaskCard, TaskTitle } from './styles';
import FlaskIcon from './rocket';
import moment from 'moment';

const TaskItem = ({key, item, process, title = '', date, user, dont, nice, must, color}) => {
  // console.log('process', process)
  // console.log('title', title)
  return (
    <TaskCard key={key}>
      <Header>
        {
          process === 'Testing' ? (
            <TaskTitle href={`/evaluaciones/${item && item._id ? item._id : ''}`}>{title}</TaskTitle>
          ) : (
            process === 'Validated' ? (
              <TaskTitle style={{color: '#1A738D', cursor: 'initial'}}>{title}</TaskTitle>
            ) : (
              <TaskTitle style={{color: 'red', textDecoration: 'line-through', cursor: 'initial'}}>{title}</TaskTitle>
            )
          )
        }
        <FlaskIcon color={color} process={process} />
      </Header>
      <Meta>{moment(date).format('YYYY-MM-DD')} / {user}</Meta>
      <Reactions>
        <span><FaThumbsUp color="#00bcd4" /> {must}</span>
        <span><FaRegThumbsUp /> {nice}</span>
        <span><FaThumbsDown color="#f44336" /> {dont}</span>
      </Reactions>
    </TaskCard>
  )
};
  
export default TaskItem;