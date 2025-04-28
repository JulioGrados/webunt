import { Base } from '../../../layout/base'
import { isLoggedRole, isLoggedUser } from 'utils/functions/auth'

import AddPortfolio from '../../../views/portfolio/containers/add'

const Add = ({ role }) => (
  <Base current='portfolio-list' currentMenu='portfolio'>
    <AddPortfolio role={role} />
  </Base>
)

Add.getInitialProps = async ctx => isLoggedRole(ctx)

export default Add
