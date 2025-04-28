import { isLoggedUser } from 'utils/functions/auth'
import { Login } from '../components/auth/login'
import HeadPage from '../components/head'

// import { redirect } from 'utils/functions/redirect'
import HeaderSign from '../components/header/sign'
import Question from '../components/question'
import Welcome from '../components/welcome'
import { IncomePage } from '../layout/income'
import { useSession } from '../hooks'

const QuestionPage = () => {
  const { loggedUser, logout } = useSession()
  return (
    <IncomePage>
      <HeadPage title={'IncubaUNT - Bienvenida'} description={'Bienvenida'} />
      <HeaderSign user={loggedUser} handleLogout={logout} />
      <Question />
    </IncomePage>
  )
}

QuestionPage.getInitialProps = async ctx => isLoggedUser(ctx)

export default QuestionPage