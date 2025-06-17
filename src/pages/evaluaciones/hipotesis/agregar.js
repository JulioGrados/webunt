import HeadPage from '../../../components/head'
import HeaderSign from '../../../components/header/sign'
import { isLoggedUser } from 'utils/functions/auth'
import { useSession } from '../../../hooks'
import dynamic from 'next/dynamic';
import HypothesisForm from '../../../components/hyphotesis';

const BMCLayout = dynamic(() => import('../../../components/bmc'), { ssr: false });


const HypothesisPage = () => {
  const { loggedUser, logout } = useSession()
  return (
    <>
      <HeadPage title={'IncubaUNT - Hipótesis agregar'} description={'Hipótesis'} />
      <HeaderSign user={loggedUser} handleLogout={logout} />
      {/* <Evaluation /> */}
      <HypothesisForm />
    </>
  )
}

HypothesisPage.getInitialProps = async ctx => isLoggedUser(ctx)

export default HypothesisPage