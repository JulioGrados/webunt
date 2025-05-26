import {
    listMentors,
    listOpenMentors,
    createMentor,
    detailMentor,
    updateMentor,
    removeMentor
  } from 'utils/api/mentors'
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
  
  const LOADING_GET_MENTORS = 'LOADING_GET_MENTORS'
  const SUCCESS_GET_MENTORS = 'SUCCESS_GET_MENTORS'
  const ERROR_GET_MENTORS = 'ERROR_GET_MENTORS'

  const LOADING_GET_OPENMENTORS = 'LOADING_GET_OPENMENTORS'
  const SUCCESS_GET_OPENMENTORS = 'SUCCESS_GET_OPENMENTORS'
  const ERROR_GET_OPENMENTORS = 'ERROR_GET_OPENMENTORS'
  
  const LOADING_ADD_MENTOR = 'LOADING_ADD_MENTOR'
  const SUCCESS_ADD_MENTOR = 'SUCCESS_ADD_MENTOR'
  const ERROR_ADD_MENTOR = 'ERROR_ADD_MENTOR'
  
  const LOADING_GET_MENTOR = 'LOADING_GET_MENTOR'
  const SUCCESS_GET_MENTOR = 'SUCCESS_GET_MENTOR'
  const ERROR_GET_MENTOR = 'ERROR_GET_MENTOR'
  
  const LOADING_EDIT_MENTOR = 'LOADING_EDIT_MENTOR'
  const SUCCESS_EDIT_MENTOR = 'SUCCESS_EDIT_MENTOR'
  const ERROR_EDIT_MENTOR = 'ERROR_EDIT_MENTOR'
  
  const LOADING_DELETE_MENTOR = 'LOADING_DELETE_MENTOR'
  const SUCCESS_DELETE_MENTOR = 'SUCCESS_DELETE_MENTOR'
  const ERROR_DELETE_MENTOR = 'ERROR_DELETE_MENTOR'
  
  const RELOAD_STATE = 'RELOAD_STATE'
  
  // reducer
  export default function reducer (state = initialValue, action) {
    switch (action.type) {
      // LIST
      case LOADING_GET_MENTORS: {
        return loadingReducer(state)
      }
      case ERROR_GET_MENTORS: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_GET_MENTORS: {
        return successReducer(state, {
          list: action.payload,
          loaded: true
        })
      }
      // LIST OPEN
      case LOADING_GET_OPENMENTORS: {
        return loadingReducer(state)
      }
      case ERROR_GET_OPENMENTORS: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_GET_OPENMENTORS: {
        return successReducer(state, {
          list: action.payload,
          loaded: true
        })
      }
      // CREATE
      case LOADING_ADD_MENTOR: {
        return loadingReducer(state)
      }
      case ERROR_ADD_MENTOR: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_ADD_MENTOR: {
        return successReducer(state, {
          list: state.loaded ? [action.payload, ...state.list] : []
        })
      }
      // DETAIL
      case LOADING_GET_MENTOR: {
        return loadingReducer(state)
      }
      case ERROR_GET_MENTOR: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_GET_MENTOR: {
        return successReducer(state, {
          current: action.payload
        })
      }
      // UPDATE
      case LOADING_EDIT_MENTOR: {
        return loadingReducer(state)
      }
      case ERROR_EDIT_MENTOR: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_EDIT_MENTOR: {
        return successReducer(state, {
          list: updateItem(state.list, action.payload),
          current: action.payload
        })
      }
      // DELETE
      case LOADING_DELETE_MENTOR: {
        return loadingReducer(state)
      }
      case ERROR_DELETE_MENTOR: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_DELETE_MENTOR: {
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
  export const getMentors = (params, extra = {}) => {
    return {
      types: [
        LOADING_GET_MENTORS,
        SUCCESS_GET_MENTORS,
        ERROR_GET_MENTORS
      ],
      promise: () => listMentors(params),
      ...extra
    }
  }

  export const getOpenMentors = (params, extra = {}) => {
    return {
      types: [
        LOADING_GET_OPENMENTORS,
        SUCCESS_GET_OPENMENTORS,
        ERROR_GET_OPENMENTORS
      ],
      promise: () => listOpenMentors(params),
      ...extra
    }
  }
  
  export const addMentor = (data, extra = {}) => {
    return {
      types: [LOADING_ADD_MENTOR, SUCCESS_ADD_MENTOR, ERROR_ADD_MENTOR],
      promise: () => createMentor(data),
      ...extra
    }
  }
  
  export const getMentor = (id, params, extra = {}) => {
    return {
      types: [LOADING_GET_MENTOR, SUCCESS_GET_MENTOR, ERROR_GET_MENTOR],
      promise: () => detailMentor(id, params),
      ...extra
    }
  }
  
  export const editMentor = (id, data, extra = {}) => {
    return {
      types: [
        LOADING_EDIT_MENTOR,
        SUCCESS_EDIT_MENTOR,
        ERROR_EDIT_MENTOR
      ],
      promise: () => updateMentor(id, data),
      ...extra
    }
  }
  
  export const deleteMentor = (id, extra = {}) => {
    return {
      types: [
        LOADING_DELETE_MENTOR,
        SUCCESS_DELETE_MENTOR,
        ERROR_DELETE_MENTOR
      ],
      promise: () => removeMentor(id),
      ...extra
    }
  }
  
  export const reloadState = () => {
    return {
      type: RELOAD_STATE
    }
  }
  