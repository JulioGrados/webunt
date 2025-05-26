import {
    listAllys,
    listOpenAllys,
    createAlly,
    detailAlly,
    updateAlly,
    removeAlly
  } from 'utils/api/allys'
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
  
  const LOADING_GET_ALLYS = 'LOADING_GET_ALLYS'
  const SUCCESS_GET_ALLYS = 'SUCCESS_GET_ALLYS'
  const ERROR_GET_ALLYS = 'ERROR_GET_ALLYS'

  const LOADING_GET_OPENALLYS = 'LOADING_GET_OPENALLYS'
  const SUCCESS_GET_OPENALLYS = 'SUCCESS_GET_OPENALLYS'
  const ERROR_GET_OPENALLYS = 'ERROR_GET_OPENALLYS'
  
  const LOADING_ADD_ALLY = 'LOADING_ADD_ALLY'
  const SUCCESS_ADD_ALLY = 'SUCCESS_ADD_ALLY'
  const ERROR_ADD_ALLY = 'ERROR_ADD_ALLY'
  
  const LOADING_GET_ALLY = 'LOADING_GET_ALLY'
  const SUCCESS_GET_ALLY = 'SUCCESS_GET_ALLY'
  const ERROR_GET_ALLY = 'ERROR_GET_ALLY'
  
  const LOADING_EDIT_ALLY = 'LOADING_EDIT_ALLY'
  const SUCCESS_EDIT_ALLY = 'SUCCESS_EDIT_ALLY'
  const ERROR_EDIT_ALLY = 'ERROR_EDIT_ALLY'
  
  const LOADING_DELETE_ALLY = 'LOADING_DELETE_ALLY'
  const SUCCESS_DELETE_ALLY = 'SUCCESS_DELETE_ALLY'
  const ERROR_DELETE_ALLY = 'ERROR_DELETE_ALLY'
  
  const RELOAD_STATE = 'RELOAD_STATE'
  
  // reducer
  export default function reducer (state = initialValue, action) {
    switch (action.type) {
      // LIST
      case LOADING_GET_ALLYS: {
        return loadingReducer(state)
      }
      case ERROR_GET_ALLYS: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_GET_ALLYS: {
        return successReducer(state, {
          list: action.payload,
          loaded: true
        })
      }
      // LIST OPEN
      case LOADING_GET_OPENALLYS: {
        return loadingReducer(state)
      }
      case ERROR_GET_OPENALLYS: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_GET_OPENALLYS: {
        return successReducer(state, {
          list: action.payload,
          loaded: true
        })
      }
      // CREATE
      case LOADING_ADD_ALLY: {
        return loadingReducer(state)
      }
      case ERROR_ADD_ALLY: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_ADD_ALLY: {
        return successReducer(state, {
          list: state.loaded ? [action.payload, ...state.list] : []
        })
      }
      // DETAIL
      case LOADING_GET_ALLY: {
        return loadingReducer(state)
      }
      case ERROR_GET_ALLY: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_GET_ALLY: {
        return successReducer(state, {
          current: action.payload
        })
      }
      // UPDATE
      case LOADING_EDIT_ALLY: {
        return loadingReducer(state)
      }
      case ERROR_EDIT_ALLY: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_EDIT_ALLY: {
        return successReducer(state, {
          list: updateItem(state.list, action.payload),
          current: action.payload
        })
      }
      // DELETE
      case LOADING_DELETE_ALLY: {
        return loadingReducer(state)
      }
      case ERROR_DELETE_ALLY: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_DELETE_ALLY: {
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
  export const getAllys = (params, extra = {}) => {
    return {
      types: [
        LOADING_GET_ALLYS,
        SUCCESS_GET_ALLYS,
        ERROR_GET_ALLYS
      ],
      promise: () => listAllys(params),
      ...extra
    }
  }

  export const getOpenAllys = (params, extra = {}) => {
    return {
      types: [
        LOADING_GET_OPENALLYS,
        SUCCESS_GET_OPENALLYS,
        ERROR_GET_OPENALLYS
      ],
      promise: () => listOpenAllys(params),
      ...extra
    }
  }
  
  export const addAlly = (data, extra = {}) => {
    return {
      types: [LOADING_ADD_ALLY, SUCCESS_ADD_ALLY, ERROR_ADD_ALLY],
      promise: () => createAlly(data),
      ...extra
    }
  }
  
  export const getAlly = (id, params, extra = {}) => {
    return {
      types: [LOADING_GET_ALLY, SUCCESS_GET_ALLY, ERROR_GET_ALLY],
      promise: () => detailAlly(id, params),
      ...extra
    }
  }
  
  export const editAlly = (id, data, extra = {}) => {
    return {
      types: [
        LOADING_EDIT_ALLY,
        SUCCESS_EDIT_ALLY,
        ERROR_EDIT_ALLY
      ],
      promise: () => updateAlly(id, data),
      ...extra
    }
  }
  
  export const deleteAlly = (id, extra = {}) => {
    return {
      types: [
        LOADING_DELETE_ALLY,
        SUCCESS_DELETE_ALLY,
        ERROR_DELETE_ALLY
      ],
      promise: () => removeAlly(id),
      ...extra
    }
  }
  
  export const reloadState = () => {
    return {
      type: RELOAD_STATE
    }
  }
  