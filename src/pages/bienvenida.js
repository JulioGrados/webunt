import { Login } from '../components/auth/login'
import HeadPage from '../components/head'

import { redirect } from 'utils/functions/redirect'
import HeaderSign from '../components/header/sign'
import Welcome from '../components/welcome'
import { IncomePage } from '../layout/income'
import { isLoggedUser } from 'utils/functions/auth'
import { useSession } from '../hooks'

const WelcomePage = () => {
  const { loggedUser, logout } = useSession()
  return (
    <IncomePage>
      <HeadPage title={'IncubaUNT - Bienvenida'} description={'Bienvenida'} />
      <HeaderSign user={loggedUser} handleLogout={logout} />
      <Welcome />
    </IncomePage>
  )
}

WelcomePage.getInitialProps = async ctx => isLoggedUser(ctx)

export default WelcomePage