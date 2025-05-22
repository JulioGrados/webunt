import { isLoggedRole } from 'utils/functions/auth'
import { Base } from '../../../layout/base'
import ListAllys from '../../../views/ally/containers/list'
import ListTeams from '../../../views/team/containers/list'

const Users = () => (
  <Base current='team-list' currentMenu='team'>
    <ListTeams />
  </Base>
)

Users.getInitialProps = async ctx => isLoggedRole(ctx)

export default Users