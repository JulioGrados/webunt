import { Base } from '../../../layout/base'
import { isLoggedRole, isLoggedUser } from 'utils/functions/auth'

import AddAlly from '../../../views/ally/containers/add'

const Add = ({ role }) => (
  <Base current='ally-list' currentMenu='ally'>
    <AddAlly role={role} />
  </Base>
)

Add.getInitialProps = async ctx => isLoggedRole(ctx)

export default Add
