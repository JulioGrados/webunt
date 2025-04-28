import { isLoggedRole } from 'utils/functions/auth'
import { Base } from '../../../layout/base'
import ListWelcome from '../../../views/welcome/containers/list'

const Welcome = () => (
  <Base current='welcome-list' currentMenu='welcome'>
    <ListWelcome />
  </Base>
)

Welcome.getInitialProps = async ctx => isLoggedRole(ctx)

export default Welcome