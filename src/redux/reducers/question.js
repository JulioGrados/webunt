import {
    listQuestions,
    createQuestion,
    detailQuestion,
    updateQuestion,
    removeQuestion
  } from 'utils/api/question'
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
  
  const LOADING_GET_QUESTIONS = 'LOADING_GET_QUESTIONS'
  const SUCCESS_GET_QUESTIONS = 'SUCCESS_GET_QUESTIONS'
  const ERROR_GET_QUESTIONS = 'ERROR_GET_QUESTIONS'
  
  const LOADING_ADD_QUESTION = 'LOADING_ADD_QUESTION'
  const SUCCESS_ADD_QUESTION = 'SUCCESS_ADD_QUESTION'
  const ERROR_ADD_QUESTION = 'ERROR_ADD_QUESTION'
  
  const LOADING_GET_QUESTION = 'LOADING_GET_QUESTION'
  const SUCCESS_GET_QUESTION = 'SUCCESS_GET_QUESTION'
  const ERROR_GET_QUESTION = 'ERROR_GET_QUESTION'
  
  const LOADING_EDIT_QUESTION = 'LOADING_EDIT_QUESTION'
  const SUCCESS_EDIT_QUESTION = 'SUCCESS_EDIT_QUESTION'
  const ERROR_EDIT_QUESTION = 'ERROR_EDIT_QUESTION'
  
  const LOADING_DELETE_QUESTION = 'LOADING_DELETE_QUESTION'
  const SUCCESS_DELETE_QUESTION = 'SUCCESS_DELETE_QUESTION'
  const ERROR_DELETE_QUESTION = 'ERROR_DELETE_QUESTION'
  
  const RELOAD_STATE = 'RELOAD_STATE'
  
  // reducer
  export default function reducer (state = initialValue, action) {
    switch (action.type) {
      // LIST
      case LOADING_GET_QUESTIONS: {
        return loadingReducer(state)
      }
      case ERROR_GET_QUESTIONS: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_GET_QUESTIONS: {
        return successReducer(state, {
          list: action.payload,
          loaded: true
        })
      }
      // CREATE
      case LOADING_ADD_QUESTION: {
        return loadingReducer(state)
      }
      case ERROR_ADD_QUESTION: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_ADD_QUESTION: {
        return successReducer(state, {
          list: state.loaded ? [action.payload, ...state.list] : []
        })
      }
      // DETAIL
      case LOADING_GET_QUESTION: {
        return loadingReducer(state)
      }
      case ERROR_GET_QUESTION: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_GET_QUESTION: {
        return successReducer(state, {
          current: action.payload
        })
      }
      // UPDATE
      case LOADING_EDIT_QUESTION: {
        return loadingReducer(state)
      }
      case ERROR_EDIT_QUESTION: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_EDIT_QUESTION: {
        return successReducer(state, {
          list: updateItem(state.list, action.payload),
          current: action.payload
        })
      }
      // DELETE
      case LOADING_DELETE_QUESTION: {
        return loadingReducer(state)
      }
      case ERROR_DELETE_QUESTION: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_DELETE_QUESTION: {
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
  export const getQuestions = (params, extra = {}) => {
    return {
      types: [
        LOADING_GET_QUESTIONS,
        SUCCESS_GET_QUESTIONS,
        ERROR_GET_QUESTIONS
      ],
      promise: () => listQuestions(params),
      ...extra
    }
  }
  
  export const addQuestion = (data, extra = {}) => {
    return {
      types: [LOADING_ADD_QUESTION, SUCCESS_ADD_QUESTION, ERROR_ADD_QUESTION],
      promise: () => createQuestion(data),
      ...extra
    }
  }
  
  export const getQuestion = (id, params, extra = {}) => {
    return {
      types: [LOADING_GET_QUESTION, SUCCESS_GET_QUESTION, ERROR_GET_QUESTION],
      promise: () => detailQuestion(id, params),
      ...extra
    }
  }
  
  export const editQuestion = (id, data, extra = {}) => {
    return {
      types: [
        LOADING_EDIT_QUESTION,
        SUCCESS_EDIT_QUESTION,
        ERROR_EDIT_QUESTION
      ],
      promise: () => updateQuestion(id, data),
      ...extra
    }
  }
  
  export const deleteQuestion = (id, extra = {}) => {
    return {
      types: [
        LOADING_DELETE_QUESTION,
        SUCCESS_DELETE_QUESTION,
        ERROR_DELETE_QUESTION
      ],
      promise: () => removeQuestion(id),
      ...extra
    }
  }
  
  export const reloadState = () => {
    return {
      type: RELOAD_STATE
    }
  }
  