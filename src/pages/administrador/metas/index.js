import { isLoggedRole } from 'utils/functions/auth'
import { Base } from '../../../layout/base'
import ListGoals from '../../../views/goal/containers/list'

const Goals = () => (
  <Base current='goal-list' currentMenu='goal'>
    <ListGoals />
  </Base>
)

Goals.getInitialProps = async ctx => isLoggedRole(ctx)

export default Goals