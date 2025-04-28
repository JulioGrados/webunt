import { Login } from '../components/auth/login'
import HeadPage from '../components/head'

// import { redirect } from 'utils/functions/redirect'
import HeaderSign from '../components/header/sign'
import { IncomePage } from '../layout/income'
import Result from '../components/results'
import { isLoggedUser } from 'utils/functions/auth'
import { useSession } from '../hooks'

const ResultPage = () => {
  const { loggedUser, logout } = useSession()
  return (
    <IncomePage>
      <HeadPage title={'IncubaUNT - Resultados'} description={'Resultados'} />
      <HeaderSign  user={loggedUser} handleLogout={logout} />
      <Result />
    </IncomePage>
  )
}

ResultPage.getInitialProps = async ctx => isLoggedUser(ctx)

export default ResultPage