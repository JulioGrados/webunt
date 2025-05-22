import { Base } from '../../../layout/base'
import { isLoggedRole, isLoggedUser } from 'utils/functions/auth'

import AddAlly from '../../../views/ally/containers/add'
import AddTeam from '../../../views/team/containers/add'

const Add = ({ role }) => (
  <Base current='team-list' currentMenu='team'>
    <AddTeam role={role} />
  </Base>
)

Add.getInitialProps = async ctx => isLoggedRole(ctx)

export default Add
