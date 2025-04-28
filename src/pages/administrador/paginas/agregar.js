import { Base } from '../../../layout/base'
import { isLoggedRole, isLoggedUser } from 'utils/functions/auth'

import AddPage from '../../../views/page/containers/add'

const Add = ({ role }) => (
  <Base current='page-list' currentMenu='page'>
    <AddPage role={role} />
  </Base>
)

Add.getInitialProps = async ctx => isLoggedRole(ctx)

export default Add
