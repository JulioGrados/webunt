import {
    listWelcomes,
    createWelcome,
    detailWelcome,
    updateWelcome,
    removeWelcome
  } from 'utils/api/welcome'
  import { reducers } from 'utils'
  
  const {
    errorReducer,
    cleanReducer,
    loadingReducer,
    successReducer,
    updateItem,
    removeItem
  } = reducers
  
  // const
  const initialValue = {
    list: [],
    current: null,
    loading: false,
    loaded: false,
    error: ''
  }
  
  const LOADING_GET_WELCOMES = 'LOADING_GET_WELCOMES'
  const SUCCESS_GET_WELCOMES = 'SUCCESS_GET_WELCOMES'
  const ERROR_GET_WELCOMES = 'ERROR_GET_WELCOMES'
  
  const LOADING_ADD_WELCOME = 'LOADING_ADD_WELCOME'
  const SUCCESS_ADD_WELCOME = 'SUCCESS_ADD_WELCOME'
  const ERROR_ADD_WELCOME = 'ERROR_ADD_WELCOME'
  
  const LOADING_GET_WELCOME = 'LOADING_GET_WELCOME'
  const SUCCESS_GET_WELCOME = 'SUCCESS_GET_WELCOME'
  const ERROR_GET_WELCOME = 'ERROR_GET_WELCOME'
  
  const LOADING_EDIT_WELCOME = 'LOADING_EDIT_WELCOME'
  const SUCCESS_EDIT_WELCOME = 'SUCCESS_EDIT_WELCOME'
  const ERROR_EDIT_WELCOME = 'ERROR_EDIT_WELCOME'
  
  const LOADING_DELETE_WELCOME = 'LOADING_DELETE_WELCOME'
  const SUCCESS_DELETE_WELCOME = 'SUCCESS_DELETE_WELCOME'
  const ERROR_DELETE_WELCOME = 'ERROR_DELETE_WELCOME'
  
  const RELOAD_STATE = 'RELOAD_STATE'
  
  // reducer
  export default function reducer (state = initialValue, action) {
    switch (action.type) {
      // LIST
      case LOADING_GET_WELCOMES: {
        return loadingReducer(state)
      }
      case ERROR_GET_WELCOMES: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_GET_WELCOMES: {
        return successReducer(state, {
          list: action.payload,
          loaded: true
        })
      }
      // CREATE
      case LOADING_ADD_WELCOME: {
        return loadingReducer(state)
      }
      case ERROR_ADD_WELCOME: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_ADD_WELCOME: {
        return successReducer(state, {
          list: state.loaded ? [action.payload, ...state.list] : []
        })
      }
      // DETAIL
      case LOADING_GET_WELCOME: {
        return loadingReducer(state)
      }
      case ERROR_GET_WELCOME: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_GET_WELCOME: {
        return successReducer(state, {
          current: action.payload
        })
      }
      // UPDATE
      case LOADING_EDIT_WELCOME: {
        return loadingReducer(state)
      }
      case ERROR_EDIT_WELCOME: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_EDIT_WELCOME: {
        return successReducer(state, {
          list: updateItem(state.list, action.payload),
          current: action.payload
        })
      }
      // DELETE
      case LOADING_DELETE_WELCOME: {
        return loadingReducer(state)
      }
      case ERROR_DELETE_WELCOME: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_DELETE_WELCOME: {
        return successReducer(state, {
          list: removeItem(state.list, action.payload)
        })
      }
      // CLEAN
      case RELOAD_STATE: {
        return cleanReducer(state)
      }
      default:
        return state
    }
  }
  
  // actions
  export const getWelcomes = (params, extra = {}) => {
    return {
      types: [
        LOADING_GET_WELCOMES,
        SUCCESS_GET_WELCOMES,
        ERROR_GET_WELCOMES
      ],
      promise: () => listWelcomes(params),
      ...extra
    }
  }
  
  export const addWelcome = (data, extra = {}) => {
    return {
      types: [LOADING_ADD_WELCOME, SUCCESS_ADD_WELCOME, ERROR_ADD_WELCOME],
      promise: () => createWelcome(data),
      ...extra
    }
  }
  
  export const getWelcome = (id, params, extra = {}) => {
    return {
      types: [LOADING_GET_WELCOME, SUCCESS_GET_WELCOME, ERROR_GET_WELCOME],
      promise: () => detailWelcome(id, params),
      ...extra
    }
  }
  
  export const editWelcome = (id, data, extra = {}) => {
    return {
      types: [
        LOADING_EDIT_WELCOME,
        SUCCESS_EDIT_WELCOME,
        ERROR_EDIT_WELCOME
      ],
      promise: () => updateWelcome(id, data),
      ...extra
    }
  }
  
  export const deleteWelcome = (id, extra = {}) => {
    return {
      types: [
        LOADING_DELETE_WELCOME,
        SUCCESS_DELETE_WELCOME,
        ERROR_DELETE_WELCOME
      ],
      promise: () => removeWelcome(id),
      ...extra
    }
  }
  
  export const reloadState = () => {
    return {
      type: RELOAD_STATE
    }
  }
  