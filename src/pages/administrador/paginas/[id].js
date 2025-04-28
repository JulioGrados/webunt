import { Base } from '../../../layout/base'
import { isLoggedRole, isLoggedUser } from 'utils/functions/auth'

import EditPage from '../../../views/page/containers/edit'

const Edit = ({ role }) => (
  <Base current='page-list' currentMenu='page'>
    <EditPage role={role} />
  </Base>
)

Edit.getInitialProps = async ctx => isLoggedRole(ctx)

export default Edit
