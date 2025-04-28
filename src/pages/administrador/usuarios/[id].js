import { Base } from '../../../layout/base'
import { isLoggedRole, isLoggedUser } from 'utils/functions/auth'

import EditUser from '../../../views/user/containers/edit'

const Edit = ({ role }) => (
  <Base current='user-list' currentMenu='user'>
    <EditUser role={role} />
  </Base>
)

Edit.getInitialProps = async ctx => isLoggedRole(ctx)

export default Edit
