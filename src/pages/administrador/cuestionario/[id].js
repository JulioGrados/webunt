import { Base } from '../../../layout/base'
import { isLoggedRole, isLoggedUser } from 'utils/functions/auth'

import EditQuestion from '../../../views/question/containers/edit'

const Edit = ({ role }) => (
  <Base current='question-list' currentMenu='question'>
    <EditQuestion role={role} />
  </Base>
)

Edit.getInitialProps = async ctx => isLoggedRole(ctx)

export default Edit
