import { Base } from '../../../layout/base'
import { isLoggedRole, isLoggedUser } from 'utils/functions/auth'

import EditInitiative from '../../../views/initiative/containers/edit'

const Edit = ({ role }) => (
  <Base current='initiative-list' currentMenu='initiative'>
    <EditInitiative role={role} />
  </Base>
)

Edit.getInitialProps = async ctx => isLoggedRole(ctx)

export default Edit
