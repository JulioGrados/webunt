import { isLoggedRole } from 'utils/functions/auth'
import { Base } from '../../../layout/base'
import ListInitiatives from '../../../views/initiative/containers/list'

const Initiatives = () => (
  <Base current='initiative-list' currentMenu='initiative'>
    <ListInitiatives />
  </Base>
)

Initiatives.getInitialProps = async ctx => isLoggedRole(ctx)

export default Initiatives