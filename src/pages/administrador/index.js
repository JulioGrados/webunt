import { isLoggedRole } from 'utils/functions/auth'
import { Base } from '../../layout/base'

const Home = () => {
  return (
    <Base current='home'>
      <div>hola mundo</div>
    </Base>
  )
}

Home.getInitialProps = async ctx => isLoggedRole(ctx)

export default Home
