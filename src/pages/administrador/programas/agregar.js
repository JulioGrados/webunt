import { Base } from '../../../layout/base'
import { isLoggedRole, isLoggedUser } from 'utils/functions/auth'

import AddProgram from '../../../views/program/containers/add'

const Add = ({ role }) => (
  <Base current='program-list' currentMenu='program'>
    <AddProgram role={role} />
  </Base>
)

Add.getInitialProps = async ctx => isLoggedRole(ctx)

export default Add
