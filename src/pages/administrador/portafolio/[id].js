import { Base } from '../../../layout/base'
import { isLoggedRole, isLoggedUser } from 'utils/functions/auth'

import EditPortfolio from '../../../views/portfolio/containers/edit'

const Edit = ({ role }) => (
  <Base current='portfolio-list' currentMenu='portfolio'>
    <EditPortfolio role={role} />
  </Base>
)

Edit.getInitialProps = async ctx => isLoggedRole(ctx)

export default Edit
