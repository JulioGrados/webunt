import { Login } from '../components/auth/login'
import HeadPage from '../components/head'

// import { redirect } from 'utils/functions/redirect'
import HeaderSign from '../components/header/sign'
import { IncomePage } from '../layout/income'
import Result from '../components/results'
import { isLoggedUser } from 'utils/functions/auth'
import Evaluation from '../components/evaluation'
import { useSession } from '../hooks'
import dynamic from 'next/dynamic';

const BMCLayout = dynamic(() => import('../components/bmc'), { ssr: false });


const ResultPage = () => {
  const { loggedUser, logout } = useSession()
  return (
    <>
      <HeadPage title={'IncubaUNT - Evaluaciones'} description={'Evaluaciones'} />
      <HeaderSign user={loggedUser} handleLogout={logout} />
      {/* <Evaluation /> */}
      <BMCLayout />
    </>
  )
}

ResultPage.getInitialProps = async ctx => isLoggedUser(ctx)

export default ResultPage