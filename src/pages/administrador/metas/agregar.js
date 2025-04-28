import { Base } from '../../../layout/base'
import { isLoggedRole, isLoggedUser } from 'utils/functions/auth'

import AddGoal from '../../../views/goal/containers/add'

const Goal = ({ role }) => (
  <Base current='goal-list' currentMenu='goal'>
    <AddGoal role={role} />
  </Base>
)

Goal.getInitialProps = async ctx => isLoggedRole(ctx)

export default Goal
