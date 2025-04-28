import { isLoggedRole } from 'utils/functions/auth'
import { Base } from '../../../layout/base'
import ListPortfolios from '../../../views/portfolio/containers/list'

const Users = () => (
  <Base current='portfolio-list' currentMenu='portfolio'>
    <ListPortfolios />
  </Base>
)

Users.getInitialProps = async ctx => isLoggedRole(ctx)

export default Users