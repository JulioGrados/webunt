import { Login } from '../components/auth/login'
import HeadPage from '../components/head'

import { redirect } from 'utils/functions/redirect'
import { LayoutPage } from '../layout/page'

const LoginPage = () => {
  return (
    <LayoutPage>
      <HeadPage title={'IncubaUNT - Login'} description={'Login'} />
      <Login />
    </LayoutPage>
  )
}

LoginPage.getInitialProps = async ctx => {
  const { jwt } = ctx
  if (jwt) {
    redirect({ ctx, location: '/' })
  }
}

export default LoginPage