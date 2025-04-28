import { Base } from '../../../layout/base'
import { isLoggedRole, isLoggedUser } from 'utils/functions/auth'

import EditGoal from '../../../views/goal/containers/edit'

const Edit = ({ role }) => (
  <Base current='goal-list' currentMenu='goal'>
    <EditGoal role={role} />
  </Base>
)

Edit.getInitialProps = async ctx => isLoggedRole(ctx)

export default Edit
