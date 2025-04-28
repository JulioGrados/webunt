import {
    listPrograms,
    createProgram,
    detailProgram,
    updateProgram,
    removeProgram
  } from 'utils/api/programs'
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
  
  const LOADING_GET_PROGRAMS = 'LOADING_GET_PROGRAMS'
  const SUCCESS_GET_PROGRAMS = 'SUCCESS_GET_PROGRAMS'
  const ERROR_GET_PROGRAMS = 'ERROR_GET_PROGRAMS'
  
  const LOADING_ADD_PROGRAM = 'LOADING_ADD_PROGRAM'
  const SUCCESS_ADD_PROGRAM = 'SUCCESS_ADD_PROGRAM'
  const ERROR_ADD_PROGRAM = 'ERROR_ADD_PROGRAM'
  
  const LOADING_GET_PROGRAM = 'LOADING_GET_PROGRAM'
  const SUCCESS_GET_PROGRAM = 'SUCCESS_GET_PROGRAM'
  const ERROR_GET_PROGRAM = 'ERROR_GET_PROGRAM'
  
  const LOADING_EDIT_PROGRAM = 'LOADING_EDIT_PROGRAM'
  const SUCCESS_EDIT_PROGRAM = 'SUCCESS_EDIT_PROGRAM'
  const ERROR_EDIT_PROGRAM = 'ERROR_EDIT_PROGRAM'
  
  const LOADING_DELETE_PROGRAM = 'LOADING_DELETE_PROGRAM'
  const SUCCESS_DELETE_PROGRAM = 'SUCCESS_DELETE_PROGRAM'
  const ERROR_DELETE_PROGRAM = 'ERROR_DELETE_PROGRAM'
  
  const RELOAD_STATE = 'RELOAD_STATE'
  
  // reducer
  export default function reducer (state = initialValue, action) {
    switch (action.type) {
      // LIST
      case LOADING_GET_PROGRAMS: {
        return loadingReducer(state)
      }
      case ERROR_GET_PROGRAMS: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_GET_PROGRAMS: {
        return successReducer(state, {
          list: action.payload,
          loaded: true
        })
      }
      // CREATE
      case LOADING_ADD_PROGRAM: {
        return loadingReducer(state)
      }
      case ERROR_ADD_PROGRAM: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_ADD_PROGRAM: {
        return successReducer(state, {
          list: state.loaded ? [action.payload, ...state.list] : []
        })
      }
      // DETAIL
      case LOADING_GET_PROGRAM: {
        return loadingReducer(state)
      }
      case ERROR_GET_PROGRAM: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_GET_PROGRAM: {
        return successReducer(state, {
          current: action.payload
        })
      }
      // UPDATE
      case LOADING_EDIT_PROGRAM: {
        return loadingReducer(state)
      }
      case ERROR_EDIT_PROGRAM: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_EDIT_PROGRAM: {
        return successReducer(state, {
          list: updateItem(state.list, action.payload),
          current: action.payload
        })
      }
      // DELETE
      case LOADING_DELETE_PROGRAM: {
        return loadingReducer(state)
      }
      case ERROR_DELETE_PROGRAM: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_DELETE_PROGRAM: {
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
  export const getPrograms = (params, extra = {}) => {
    return {
      types: [
        LOADING_GET_PROGRAMS,
        SUCCESS_GET_PROGRAMS,
        ERROR_GET_PROGRAMS
      ],
      promise: () => listPrograms(params),
      ...extra
    }
  }
  
  export const addProgram = (data, extra = {}) => {
    return {
      types: [LOADING_ADD_PROGRAM, SUCCESS_ADD_PROGRAM, ERROR_ADD_PROGRAM],
      promise: () => createProgram(data),
      ...extra
    }
  }
  
  export const getProgram = (id, params, extra = {}) => {
    return {
      types: [LOADING_GET_PROGRAM, SUCCESS_GET_PROGRAM, ERROR_GET_PROGRAM],
      promise: () => detailProgram(id, params),
      ...extra
    }
  }
  
  export const editProgram = (id, data, extra = {}) => {
    return {
      types: [
        LOADING_EDIT_PROGRAM,
        SUCCESS_EDIT_PROGRAM,
        ERROR_EDIT_PROGRAM
      ],
      promise: () => updateProgram(id, data),
      ...extra
    }
  }
  
  export const deleteProgram = (id, extra = {}) => {
    return {
      types: [
        LOADING_DELETE_PROGRAM,
        SUCCESS_DELETE_PROGRAM,
        ERROR_DELETE_PROGRAM
      ],
      promise: () => removeProgram(id),
      ...extra
    }
  }
  
  export const reloadState = () => {
    return {
      type: RELOAD_STATE
    }
  }
  