import { isLoggedRole } from 'utils/functions/auth'
import { Base } from '../../../layout/base'
import ListArchives from '../../../views/archive/containers/list'

const Archive = () => (
  <Base current='upload-list' currentMenu='upload'>
    <ListArchives />
  </Base>
)

Archive.getInitialProps = async ctx => isLoggedRole(ctx)

export default Archive