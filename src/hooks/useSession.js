import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { session } from 'utils'

import { loginUser, logoutUser, singUser } from '../redux/reducers/auth'
import { payloadToData } from 'utils/functions/user'

export const useSession = () => {
  const state = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const router = useRouter()

  const login = async (login, password) => {
    const resp = await dispatch(loginUser(login, password))

    if (resp.success) {
      session.setCookie('jwt', resp.token)
      session.setCookie('user', JSON.stringify(resp.user))
    }
    return resp
  }

  const singup = async (data) => {
    const resp = await dispatch(singUser(data))
    console.log('resp', resp)
    if (resp.success) {
      session.setCookie('jwt', resp.token)
      session.setCookie('user', JSON.stringify(resp.user))
    }
    return resp
  }

  const logout = async () => {
    const resp = await dispatch(logoutUser())
    if (resp.success) {
      session.removeCookie('jwt')
      session.removeCookie('user')
      router.push('/login')
    }
    return resp
  }

  const getUser = () => {
    const user = session.getCookie('user')
    return JSON.parse(user)  
  }

  const loggedUser = state.user ? payloadToData(state.user) : null

  return { ...state, loggedUser, login, logout, singup, getUser }
}
