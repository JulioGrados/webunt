// import { logoutUser } from 'redux-path/auth'

import { Header } from '../../components/header/admin'
import { useSession } from '../../hooks'
// import { useLogout } from '../../hooks/auth'
import { useReduxState } from '../../hooks/redux'
// import { logoutUser } from '../../redux/reducers/auth'

export const NavBar = () => {
  const authState = useReduxState('auth')
  // const handleLogout = useLogout(logoutUser, '/login')
  const { logout } = useSession()
  return <Header handleLogout={logout} user={authState.user} />
}
