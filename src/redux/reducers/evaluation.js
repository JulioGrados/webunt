import {
    listEvaluations,
    listOpenEvaluations,
    createEvaluation,
    detailEvaluation,
    updateEvaluation,
    removeEvaluation
  } from 'utils/api/evaluations'
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
  
  const LOADING_GET_EVALUATIONS = 'LOADING_GET_EVALUATIONS'
  const SUCCESS_GET_EVALUATIONS = 'SUCCESS_GET_EVALUATIONS'
  const ERROR_GET_EVALUATIONS = 'ERROR_GET_EVALUATIONS'

  const LOADING_GET_OPENEVALUATIONS = 'LOADING_GET_OPENEVALUATIONS'
  const SUCCESS_GET_OPENEVALUATIONS = 'SUCCESS_GET_OPENEVALUATIONS'
  const ERROR_GET_OPENEVALUATIONS = 'ERROR_GET_OPENEVALUATIONS'
  
  const LOADING_ADD_EVALUATION = 'LOADING_ADD_EVALUATION'
  const SUCCESS_ADD_EVALUATION = 'SUCCESS_ADD_EVALUATION'
  const ERROR_ADD_EVALUATION = 'ERROR_ADD_EVALUATION'
  
  const LOADING_GET_EVALUATION = 'LOADING_GET_EVALUATION'
  const SUCCESS_GET_EVALUATION = 'SUCCESS_GET_EVALUATION'
  const ERROR_GET_EVALUATION = 'ERROR_GET_EVALUATION'
  
  const LOADING_EDIT_EVALUATION = 'LOADING_EDIT_EVALUATION'
  const SUCCESS_EDIT_EVALUATION = 'SUCCESS_EDIT_EVALUATION'
  const ERROR_EDIT_EVALUATION = 'ERROR_EDIT_EVALUATION'
  
  const LOADING_DELETE_EVALUATION = 'LOADING_DELETE_EVALUATION'
  const SUCCESS_DELETE_EVALUATION = 'SUCCESS_DELETE_EVALUATION'
  const ERROR_DELETE_EVALUATION = 'ERROR_DELETE_EVALUATION'
  
  const RELOAD_STATE = 'RELOAD_STATE'
  
  // reducer
  export default function reducer (state = initialValue, action) {
    switch (action.type) {
      // LIST
      case LOADING_GET_EVALUATIONS: {
        return loadingReducer(state)
      }
      case ERROR_GET_EVALUATIONS: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_GET_EVALUATIONS: {
        return successReducer(state, {
          list: action.payload,
          loaded: true
        })
      }
      // LIST OPEN
      case LOADING_GET_OPENEVALUATIONS: {
        return loadingReducer(state)
      }
      case ERROR_GET_OPENEVALUATIONS: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_GET_OPENEVALUATIONS: {
        return successReducer(state, {
          list: action.payload,
          loaded: true
        })
      }
      // CREATE
      case LOADING_ADD_EVALUATION: {
        return loadingReducer(state)
      }
      case ERROR_ADD_EVALUATION: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_ADD_EVALUATION: {
        return successReducer(state, {
          list: state.loaded ? [action.payload, ...state.list] : []
        })
      }
      // DETAIL
      case LOADING_GET_EVALUATION: {
        return loadingReducer(state)
      }
      case ERROR_GET_EVALUATION: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_GET_EVALUATION: {
        return successReducer(state, {
          current: action.payload
        })
      }
      // UPDATE
      case LOADING_EDIT_EVALUATION: {
        return loadingReducer(state)
      }
      case ERROR_EDIT_EVALUATION: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_EDIT_EVALUATION: {
        return successReducer(state, {
          list: updateItem(state.list, action.payload),
          current: action.payload
        })
      }
      // DELETE
      case LOADING_DELETE_EVALUATION: {
        return loadingReducer(state)
      }
      case ERROR_DELETE_EVALUATION: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_DELETE_EVALUATION: {
        return successReducer(state, {
          list: removeItem(state.list, action.payload)
        })
      }
      // CLEAN
      case RELOAD_STATE: {
        return cleanReducer(
          {
            list: [],
            current: null,
            loading: false,
            loaded: false,
            error: ''
          }
        )
      }
      default:
        return state
    }
  }
  
  // actions
  export const getEvaluations = (params, extra = {}) => {
    return {
      types: [
        LOADING_GET_EVALUATIONS,
        SUCCESS_GET_EVALUATIONS,
        ERROR_GET_EVALUATIONS
      ],
      promise: () => listEvaluations(params),
      ...extra
    }
  }

  export const getOpenEvaluations = (params, extra = {}) => {
    return {
      types: [
        LOADING_GET_OPENEVALUATIONS,
        SUCCESS_GET_OPENEVALUATIONS,
        ERROR_GET_OPENEVALUATIONS
      ],
      promise: () => listOpenEvaluations(params),
      ...extra
    }
  }
  
  export const addEvaluation = (data, extra = {}) => {
    return {
      types: [LOADING_ADD_EVALUATION, SUCCESS_ADD_EVALUATION, ERROR_ADD_EVALUATION],
      promise: () => createEvaluation(data),
      ...extra
    }
  }
  
  export const getEvaluation = (id, params, extra = {}) => {
    return {
      types: [LOADING_GET_EVALUATION, SUCCESS_GET_EVALUATION, ERROR_GET_EVALUATION],
      promise: () => detailEvaluation(id, params),
      ...extra
    }
  }
  
  export const editEvaluation = (id, data, extra = {}) => {
    return {
      types: [
        LOADING_EDIT_EVALUATION,
        SUCCESS_EDIT_EVALUATION,
        ERROR_EDIT_EVALUATION
      ],
      promise: () => updateEvaluation(id, data),
      ...extra
    }
  }
  
  export const deleteEvaluation = (id, extra = {}) => {
    return {
      types: [
        LOADING_DELETE_EVALUATION,
        SUCCESS_DELETE_EVALUATION,
        ERROR_DELETE_EVALUATION
      ],
      promise: () => removeEvaluation(id),
      ...extra
    }
  }
  
  export const reloadState = () => {
    return {
      type: RELOAD_STATE
    }
  }
  