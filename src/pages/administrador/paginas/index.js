import { isLoggedRole } from 'utils/functions/auth'
import { Base } from '../../../layout/base'
import ListPages from '../../../views/page/containers/list'

const Users = () => (
  <Base current='page-list' currentMenu='page'>
    <ListPages />
  </Base>
)

Users.getInitialProps = async ctx => isLoggedRole(ctx)

export default Users