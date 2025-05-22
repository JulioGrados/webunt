import { isLoggedRole } from 'utils/functions/auth'
import { Base } from '../../../layout/base'
import ListMentors from '../../../views/mentor/containers/list'

const Mentors = () => (
  <Base current='mentor-list' currentMenu='mentor'>
    <ListMentors />
  </Base>
)

Mentors.getInitialProps = async ctx => isLoggedRole(ctx)

export default Mentors