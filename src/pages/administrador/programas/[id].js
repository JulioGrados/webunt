import { Base } from '../../../layout/base'
import { isLoggedRole, isLoggedUser } from 'utils/functions/auth'

import EditProgram from '../../../views/program/containers/edit'

const Edit = ({ role }) => (
  <Base current='program-list' currentMenu='program'>
    <EditProgram role={role} />
  </Base>
)

Edit.getInitialProps = async ctx => isLoggedRole(ctx)

export default Edit
