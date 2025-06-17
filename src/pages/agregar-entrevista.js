import HeadPage from '../components/head'
import HeaderSign from '../components/header/sign'
import { isLoggedUser } from 'utils/functions/auth'
import { useSession } from '../hooks'
import dynamic from 'next/dynamic';

const InterviewLayout = dynamic(() => import('../components/interview'), { ssr: false });


const ResultPage = () => {
  const { loggedUser, logout } = useSession()
  return (
    <>
      <HeadPage title={'IncubaUNT - Evaluaciones'} description={'Evaluaciones'} />
      <HeaderSign user={loggedUser} handleLogout={logout} />
      {/* <Evaluation /> */}
      <InterviewLayout />
    </>
  )
}

ResultPage.getInitialProps = async ctx => isLoggedUser(ctx)

export default ResultPage