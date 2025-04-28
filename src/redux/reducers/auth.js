import { login, singup } from 'utils/api/auth'
import { session, reducers } from 'utils'

const { loadingReducer, errorReducer, successReducer } = reducers

// constantes
const initialData = {
  loading: false,
  user: null
}

const LOGIN_USER = 'LOGIN_USER'
const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR'

const SINGUP_USER = 'SINGUP_USER'
const SINGUP_USER_SUCCESS = 'SINGUP_USER_SUCCESS'
const SINGUP_USER_ERROR = 'SINGUP_USER_ERROR'

const LOGOUT_USER = 'LOGOUT_USER'
const SET_AUTH_USER = 'SET_AUTH_USER'

// reducer
export default function reducer (state = initialData, action) {
  switch (action.type) {
    case LOGIN_USER:
      return loadingReducer(state)
    case LOGIN_USER_ERROR:
      return errorReducer(state, action.payload)
    case LOGIN_USER_SUCCESS:
      return successReducer(state, action.payload)
    case SINGUP_USER:
      return loadingReducer(state)
    case SINGUP_USER_ERROR:
      return errorReducer(state, action.payload)
    case SINGUP_USER_SUCCESS:
      return successReducer(state, action.payload)
    case LOGOUT_USER:
      return successReducer(state, action.payload)
    case SET_AUTH_USER:
      return successReducer(state, action.payload)
    default:
      return state
  }
}

// actions (thunks)
export const loginUser = (email, password) => {
  return {
    types: [LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR],
    promise: () => login(email, password)
  }
}

export const singUser = (data) => {
  return {
    types: [SINGUP_USER, SINGUP_USER_SUCCESS, SINGUP_USER_ERROR],
    promise: () => singup(data)
  }
}

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
    payload: { user: null, jwt: '' }
  }
}

export const getAuthUser = () => dispatch => {
  const jwt = session.getCookie('jwt')
  const user = session.getCookie('user')
  if (jwt && user) {
    dispatch({
      type: SET_AUTH_USER,
      payload: {
        user: JSON.parse(user),
        jwt
      }
    })
  }
}

export const setAuthUser = () => {
  const jwt = session.getCookie('jwt')
  const user = session.getCookie('user')
  if (jwt && user) {
    return {
      type: SET_AUTH_USER,
      payload: {
        user: JSON.parse(user),
        jwt
      }
    }
  }
}

export const setLocalUser = (user) => {
  if (user) {
    return {
      type: SET_AUTH_USER,
      payload: {
        user: user
      }
    }
  }
}
