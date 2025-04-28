import { Signup } from '../components/auth/signup'
import HeadPage from '../components/head'

import { redirect } from 'utils/functions/redirect'
import { LayoutPage } from '../layout/page'

const SignupPage = () => {
  return (
    <LayoutPage>
      <HeadPage title={'IncubaUNT - Registro'} description={'Registro'} />
      <Signup />
    </LayoutPage>
  )
}

SignupPage.getInitialProps = async ctx => {
  const { jwt } = ctx
  if (jwt) {
    redirect({ ctx, location: '/' })
  }
}

export default SignupPage