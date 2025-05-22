import { Base } from '../../../layout/base'
import { isLoggedRole, isLoggedUser } from 'utils/functions/auth'

import AddMentor from '../../../views/mentor/containers/add'

const Add = ({ role }) => (
  <Base current='mentor-list' currentMenu='mentor'>
    <AddMentor role={role} />
  </Base>
)

Add.getInitialProps = async ctx => isLoggedRole(ctx)

export default Add
