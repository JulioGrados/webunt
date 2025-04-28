import { isLoggedRole } from 'utils/functions/auth'
import { Base } from '../../../layout/base'
import ListQuestion from '../../../views/question/containers/list'

const Question = () => (
  <Base current='question-list' currentMenu='question'>
    <ListQuestion />
  </Base>
)

Question.getInitialProps = async ctx => isLoggedRole(ctx)

export default Question