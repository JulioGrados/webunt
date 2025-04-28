import { isLoggedRole } from 'utils/functions/auth'
import { Base } from '../../../layout/base'

import ListUsers from '../../../views/user/containers/list'

const Users = () => (
  <Base current='user-list' currentMenu='user'>
    <ListUsers />
  </Base>
)

Users.getInitialProps = async ctx => isLoggedRole(ctx)

export default Users