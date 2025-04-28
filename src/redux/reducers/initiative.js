import {
    listInitiatives,
    createInitiative,
    detailInitiative,
    updateInitiative,
    removeInitiative
  } from 'utils/api/initiatives'
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
  
  const LOADING_GET_INITIATIVES = 'LOADING_GET_INITIATIVES'
  const SUCCESS_GET_INITIATIVES = 'SUCCESS_GET_INITIATIVES'
  const ERROR_GET_INITIATIVES = 'ERROR_GET_INITIATIVES'
  
  const LOADING_ADD_INITIATIVE = 'LOADING_ADD_INITIATIVE'
  const SUCCESS_ADD_INITIATIVE = 'SUCCESS_ADD_INITIATIVE'
  const ERROR_ADD_INITIATIVE = 'ERROR_ADD_INITIATIVE'
  
  const LOADING_GET_INITIATIVE = 'LOADING_GET_INITIATIVE'
  const SUCCESS_GET_INITIATIVE = 'SUCCESS_GET_INITIATIVE'
  const ERROR_GET_INITIATIVE = 'ERROR_GET_INITIATIVE'
  
  const LOADING_EDIT_INITIATIVE = 'LOADING_EDIT_INITIATIVE'
  const SUCCESS_EDIT_INITIATIVE = 'SUCCESS_EDIT_INITIATIVE'
  const ERROR_EDIT_INITIATIVE = 'ERROR_EDIT_INITIATIVE'
  
  const LOADING_DELETE_INITIATIVE = 'LOADING_DELETE_INITIATIVE'
  const SUCCESS_DELETE_INITIATIVE = 'SUCCESS_DELETE_INITIATIVE'
  const ERROR_DELETE_INITIATIVE = 'ERROR_DELETE_INITIATIVE'
  
  const RELOAD_STATE = 'RELOAD_STATE'
  
  // reducer
  export default function reducer (state = initialValue, action) {
    switch (action.type) {
      // LIST
      case LOADING_GET_INITIATIVES: {
        return loadingReducer(state)
      }
      case ERROR_GET_INITIATIVES: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_GET_INITIATIVES: {
        return successReducer(state, {
          list: action.payload,
          loaded: true
        })
      }
      // CREATE
      case LOADING_ADD_INITIATIVE: {
        return loadingReducer(state)
      }
      case ERROR_ADD_INITIATIVE: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_ADD_INITIATIVE: {
        return successReducer(state, {
          list: state.loaded ? [action.payload, ...state.list] : []
        })
      }
      // DETAIL
      case LOADING_GET_INITIATIVE: {
        return loadingReducer(state)
      }
      case ERROR_GET_INITIATIVE: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_GET_INITIATIVE: {
        return successReducer(state, {
          current: action.payload
        })
      }
      // UPDATE
      case LOADING_EDIT_INITIATIVE: {
        return loadingReducer(state)
      }
      case ERROR_EDIT_INITIATIVE: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_EDIT_INITIATIVE: {
        return successReducer(state, {
          list: updateItem(state.list, action.payload),
          current: action.payload
        })
      }
      // DELETE
      case LOADING_DELETE_INITIATIVE: {
        return loadingReducer(state)
      }
      case ERROR_DELETE_INITIATIVE: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_DELETE_INITIATIVE: {
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
  export const getInitiatives = (params, extra = {}) => {
    return {
      types: [
        LOADING_GET_INITIATIVES,
        SUCCESS_GET_INITIATIVES,
        ERROR_GET_INITIATIVES
      ],
      promise: () => listInitiatives(params),
      ...extra
    }
  }
  
  export const addInitiative = (data, extra = {}) => {
    return {
      types: [LOADING_ADD_INITIATIVE, SUCCESS_ADD_INITIATIVE, ERROR_ADD_INITIATIVE],
      promise: () => createInitiative(data),
      ...extra
    }
  }
  
  export const getInitiative = (id, params, extra = {}) => {
    return {
      types: [LOADING_GET_INITIATIVE, SUCCESS_GET_INITIATIVE, ERROR_GET_INITIATIVE],
      promise: () => detailInitiative(id, params),
      ...extra
    }
  }
  
  export const editInitiative = (id, data, extra = {}) => {
    return {
      types: [
        LOADING_EDIT_INITIATIVE,
        SUCCESS_EDIT_INITIATIVE,
        ERROR_EDIT_INITIATIVE
      ],
      promise: () => updateInitiative(id, data),
      ...extra
    }
  }
  
  export const deleteInitiative = (id, extra = {}) => {
    return {
      types: [
        LOADING_DELETE_INITIATIVE,
        SUCCESS_DELETE_INITIATIVE,
        ERROR_DELETE_INITIATIVE
      ],
      promise: () => removeInitiative(id),
      ...extra
    }
  }
  
  export const reloadState = () => {
    return {
      type: RELOAD_STATE
    }
  }
  