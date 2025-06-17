import {
    listInterviews,
    listOpenInterviews,
    createInterview,
    detailInterview,
    updateInterview,
    removeInterview
  } from 'utils/api/interviews'
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
  
  const LOADING_GET_INTERVIEWS = 'LOADING_GET_INTERVIEWS'
  const SUCCESS_GET_INTERVIEWS = 'SUCCESS_GET_INTERVIEWS'
  const ERROR_GET_INTERVIEWS = 'ERROR_GET_INTERVIEWS'

  const LOADING_GET_OPENINTERVIEWS = 'LOADING_GET_OPENINTERVIEWS'
  const SUCCESS_GET_OPENINTERVIEWS = 'SUCCESS_GET_OPENINTERVIEWS'
  const ERROR_GET_OPENINTERVIEWS = 'ERROR_GET_OPENINTERVIEWS'
  
  const LOADING_ADD_INTERVIEW = 'LOADING_ADD_INTERVIEW'
  const SUCCESS_ADD_INTERVIEW = 'SUCCESS_ADD_INTERVIEW'
  const ERROR_ADD_INTERVIEW = 'ERROR_ADD_INTERVIEW'
  
  const LOADING_GET_INTERVIEW = 'LOADING_GET_INTERVIEW'
  const SUCCESS_GET_INTERVIEW = 'SUCCESS_GET_INTERVIEW'
  const ERROR_GET_INTERVIEW = 'ERROR_GET_INTERVIEW'
  
  const LOADING_EDIT_INTERVIEW = 'LOADING_EDIT_INTERVIEW'
  const SUCCESS_EDIT_INTERVIEW = 'SUCCESS_EDIT_INTERVIEW'
  const ERROR_EDIT_INTERVIEW = 'ERROR_EDIT_INTERVIEW'
  
  const LOADING_DELETE_INTERVIEW = 'LOADING_DELETE_INTERVIEW'
  const SUCCESS_DELETE_INTERVIEW = 'SUCCESS_DELETE_INTERVIEW'
  const ERROR_DELETE_INTERVIEW = 'ERROR_DELETE_INTERVIEW'
  
  const RELOAD_STATE = 'RELOAD_STATE'
  
  // reducer
  export default function reducer (state = initialValue, action) {
    switch (action.type) {
      // LIST
      case LOADING_GET_INTERVIEWS: {
        return loadingReducer(state)
      }
      case ERROR_GET_INTERVIEWS: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_GET_INTERVIEWS: {
        return successReducer(state, {
          list: action.payload,
          loaded: true
        })
      }
      // LIST OPEN
      case LOADING_GET_OPENINTERVIEWS: {
        return loadingReducer(state)
      }
      case ERROR_GET_OPENINTERVIEWS: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_GET_OPENINTERVIEWS: {
        return successReducer(state, {
          list: action.payload,
          loaded: true
        })
      }
      // CREATE
      case LOADING_ADD_INTERVIEW: {
        return loadingReducer(state)
      }
      case ERROR_ADD_INTERVIEW: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_ADD_INTERVIEW: {
        return successReducer(state, {
          list: state.loaded ? [action.payload, ...state.list] : []
        })
      }
      // DETAIL
      case LOADING_GET_INTERVIEW: {
        return loadingReducer(state)
      }
      case ERROR_GET_INTERVIEW: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_GET_INTERVIEW: {
        return successReducer(state, {
          current: action.payload
        })
      }
      // UPDATE
      case LOADING_EDIT_INTERVIEW: {
        return loadingReducer(state)
      }
      case ERROR_EDIT_INTERVIEW: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_EDIT_INTERVIEW: {
        return successReducer(state, {
          list: updateItem(state.list, action.payload),
          current: action.payload
        })
      }
      // DELETE
      case LOADING_DELETE_INTERVIEW: {
        return loadingReducer(state)
      }
      case ERROR_DELETE_INTERVIEW: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_DELETE_INTERVIEW: {
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
  export const getInterviews = (params, extra = {}) => {
    return {
      types: [
        LOADING_GET_INTERVIEWS,
        SUCCESS_GET_INTERVIEWS,
        ERROR_GET_INTERVIEWS
      ],
      promise: () => listInterviews(params),
      ...extra
    }
  }

  export const getOpenInterviews = (params, extra = {}) => {
    return {
      types: [
        LOADING_GET_OPENINTERVIEWS,
        SUCCESS_GET_OPENINTERVIEWS,
        ERROR_GET_OPENINTERVIEWS
      ],
      promise: () => listOpenInterviews(params),
      ...extra
    }
  }
  
  export const addInterview = (data, extra = {}) => {
    return {
      types: [LOADING_ADD_INTERVIEW, SUCCESS_ADD_INTERVIEW, ERROR_ADD_INTERVIEW],
      promise: () => createInterview(data),
      ...extra
    }
  }
  
  export const getInterview = (id, params, extra = {}) => {
    return {
      types: [LOADING_GET_INTERVIEW, SUCCESS_GET_INTERVIEW, ERROR_GET_INTERVIEW],
      promise: () => detailInterview(id, params),
      ...extra
    }
  }
  
  export const editInterview = (id, data, extra = {}) => {
    return {
      types: [
        LOADING_EDIT_INTERVIEW,
        SUCCESS_EDIT_INTERVIEW,
        ERROR_EDIT_INTERVIEW
      ],
      promise: () => updateInterview(id, data),
      ...extra
    }
  }
  
  export const deleteInterview = (id, extra = {}) => {
    return {
      types: [
        LOADING_DELETE_INTERVIEW,
        SUCCESS_DELETE_INTERVIEW,
        ERROR_DELETE_INTERVIEW
      ],
      promise: () => removeInterview(id),
      ...extra
    }
  }
  
  export const reloadState = () => {
    return {
      type: RELOAD_STATE
    }
  }
  