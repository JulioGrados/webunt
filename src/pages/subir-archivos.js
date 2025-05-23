import { isLoggedUser } from 'utils/functions/auth'
import { Login } from '../components/auth/login'
import HeadPage from '../components/head'

// import { redirect } from 'utils/functions/redirect'
import HeaderSign from '../components/header/sign'
import Upload from '../components/upload'
import { IncomePage } from '../layout/income'
import { useSession } from '../hooks'
import { ScrollPage } from '../layout/scroll'

const UploadPage = () => {
  const { loggedUser, logout } = useSession()
  return (
    <ScrollPage>
      <HeadPage title={'IncubaUNT - Upload'} description={'Upload'} />
      <HeaderSign user={loggedUser} handleLogout={logout}  />
      <Upload />
    </ScrollPage>
  )
}

UploadPage.getInitialProps = async ctx => isLoggedUser(ctx)

export default UploadPage