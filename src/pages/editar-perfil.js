import { isLoggedUser } from 'utils/functions/auth'
import { Login } from '../components/auth/login'
import HeadPage from '../components/head'

// import { redirect } from 'utils/functions/redirect'
import HeaderSign from '../components/header/sign'
import Question from '../components/question'
import Welcome from '../components/welcome'
import { IncomePage } from '../layout/income'
import { useSession } from '../hooks'
import PerfilUser from '../views/perfil/containers/edit'

const EditPage = () => {
  const { loggedUser, logout } = useSession()
  return (
    <IncomePage>
      <HeadPage title={'IncubaUNT - Editar perfil'} description={'Editar perfil'} />
      <HeaderSign user={loggedUser} handleLogout={logout} />
      <PerfilUser id={loggedUser && loggedUser._id} />
    </IncomePage>
  )
}

EditPage.getInitialProps = async ctx => isLoggedUser(ctx)

export default EditPage