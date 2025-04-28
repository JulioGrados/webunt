import { Base } from '../../../layout/base'
import { isLoggedRole, isLoggedUser } from 'utils/functions/auth'

import EditWelcome from '../../../views/welcome/containers/edit'

const Edit = ({ role }) => (
  <Base current='welcome-list' currentMenu='welcome'>
    <EditWelcome role={role} />
  </Base>
)

Edit.getInitialProps = async ctx => isLoggedRole(ctx)

export default Edit
