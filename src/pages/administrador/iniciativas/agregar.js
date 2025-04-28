import { Base } from '../../../layout/base'
import { isLoggedRole, isLoggedUser } from 'utils/functions/auth'

import AddInitiative from '../../../views/initiative/containers/add'

const Add = ({ role }) => (
  <Base current='initiative-list' currentMenu='initiative'>
    <AddInitiative role={role} />
  </Base>
)

Add.getInitialProps = async ctx => isLoggedRole(ctx)

export default Add
