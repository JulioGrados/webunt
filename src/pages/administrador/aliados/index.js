import { isLoggedRole } from 'utils/functions/auth'
import { Base } from '../../../layout/base'
import ListAllys from '../../../views/ally/containers/list'

const Users = () => (
  <Base current='ally-list' currentMenu='ally'>
    <ListAllys />
  </Base>
)

Users.getInitialProps = async ctx => isLoggedRole(ctx)

export default Users