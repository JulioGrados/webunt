import { Base } from '../../../layout/base'
import { isLoggedRole, isLoggedUser } from 'utils/functions/auth'

import EditAlly from '../../../views/ally/containers/edit'

const Edit = ({ role }) => (
  <Base current='ally-list' currentMenu='ally'>
    <EditAlly role={role} />
  </Base>
)

Edit.getInitialProps = async ctx => isLoggedRole(ctx)

export default Edit
