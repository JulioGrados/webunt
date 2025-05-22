import { Base } from '../../../layout/base'
import { isLoggedRole, isLoggedUser } from 'utils/functions/auth'

import EditMentor from '../../../views/mentor/containers/edit'

const Edit = ({ role }) => (
  <Base current='mentor-list' currentMenu='mentor'>
    <EditMentor role={role} />
  </Base>
)

Edit.getInitialProps = async ctx => isLoggedRole(ctx)

export default Edit
