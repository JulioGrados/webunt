import { Base } from '../../../layout/base'
import { isLoggedRole, isLoggedUser } from 'utils/functions/auth'

import EditAlly from '../../../views/ally/containers/edit'
import EditTeam from '../../../views/team/containers/edit'

const Edit = ({ role }) => (
  <Base current='team-list' currentMenu='team'>
    <EditTeam role={role} />
  </Base>
)

Edit.getInitialProps = async ctx => isLoggedRole(ctx)

export default Edit
