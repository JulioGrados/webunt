import { isLoggedRole } from 'utils/functions/auth'
import { Base } from '../../../layout/base'
import ListPrograms from '../../../views/program/containers/list'

const Users = () => (
  <Base current='program-list' currentMenu='program'>
    <ListPrograms />
  </Base>
)

Users.getInitialProps = async ctx => isLoggedRole(ctx)

export default Users