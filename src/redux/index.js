import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import createMiddleware from './middleware'
import reducers from './reducers'
import { getAuthUser } from './reducers/auth'

const middleware = [createMiddleware, thunk]

export const initStore = () => {
  const store = createStore(
    combineReducers(reducers),
    composeWithDevTools(applyMiddleware(...middleware))
  )
  getAuthUser()(store.dispatch)
  return store
}

export default reducers
