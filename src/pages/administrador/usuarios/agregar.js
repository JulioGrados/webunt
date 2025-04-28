import { Base } from '../../../layout/base'
import { isLoggedRole, isLoggedUser } from 'utils/functions/auth'

import AddUser from '../../../views/user/containers/add'

const Add = ({ role }) => (
  <Base current='user-list' currentMenu='user'>
    <AddUser role={role} />
  </Base>
)

Add.getInitialProps = async ctx => isLoggedRole(ctx)

export default Add
