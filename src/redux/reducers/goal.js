import {
    listGoals,
    listOpenGoals,
    createGoal,
    detailGoal,
    updateGoal,
    removeGoal
  } from 'utils/api/goals'
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
  
  const LOADING_GET_GOALS = 'LOADING_GET_GOALS'
  const SUCCESS_GET_GOALS = 'SUCCESS_GET_GOALS'
  const ERROR_GET_GOALS = 'ERROR_GET_GOALS'

  const LOADING_GET_OPENGOALS = 'LOADING_GET_OPENGOALS'
  const SUCCESS_GET_OPENGOALS = 'SUCCESS_GET_OPENGOALS'
  const ERROR_GET_OPENGOALS = 'ERROR_GET_OPENGOALS'
  
  const LOADING_ADD_GOAL = 'LOADING_ADD_GOAL'
  const SUCCESS_ADD_GOAL = 'SUCCESS_ADD_GOAL'
  const ERROR_ADD_GOAL = 'ERROR_ADD_GOAL'
  
  const LOADING_GET_GOAL = 'LOADING_GET_GOAL'
  const SUCCESS_GET_GOAL = 'SUCCESS_GET_GOAL'
  const ERROR_GET_GOAL = 'ERROR_GET_GOAL'
  
  const LOADING_EDIT_GOAL = 'LOADING_EDIT_GOAL'
  const SUCCESS_EDIT_GOAL = 'SUCCESS_EDIT_GOAL'
  const ERROR_EDIT_GOAL = 'ERROR_EDIT_GOAL'
  
  const LOADING_DELETE_GOAL = 'LOADING_DELETE_GOAL'
  const SUCCESS_DELETE_GOAL = 'SUCCESS_DELETE_GOAL'
  const ERROR_DELETE_GOAL = 'ERROR_DELETE_GOAL'
  
  const RELOAD_STATE = 'RELOAD_STATE'
  
  // reducer
  export default function reducer (state = initialValue, action) {
    switch (action.type) {
      // LIST
      case LOADING_GET_GOALS: {
        return loadingReducer(state)
      }
      case ERROR_GET_GOALS: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_GET_GOALS: {
        return successReducer(state, {
          list: action.payload,
          loaded: true
        })
      }
      // LIST OPEN
      case LOADING_GET_OPENGOALS: {
        return loadingReducer(state)
      }
      case ERROR_GET_OPENGOALS: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_GET_OPENGOALS: {
        return successReducer(state, {
          list: action.payload,
          loaded: true
        })
      }
      // CREATE
      case LOADING_ADD_GOAL: {
        return loadingReducer(state)
      }
      case ERROR_ADD_GOAL: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_ADD_GOAL: {
        return successReducer(state, {
          list: state.loaded ? [action.payload, ...state.list] : []
        })
      }
      // DETAIL
      case LOADING_GET_GOAL: {
        return loadingReducer(state)
      }
      case ERROR_GET_GOAL: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_GET_GOAL: {
        return successReducer(state, {
          current: action.payload
        })
      }
      // UPDATE
      case LOADING_EDIT_GOAL: {
        return loadingReducer(state)
      }
      case ERROR_EDIT_GOAL: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_EDIT_GOAL: {
        return successReducer(state, {
          list: updateItem(state.list, action.payload),
          current: action.payload
        })
      }
      // DELETE
      case LOADING_DELETE_GOAL: {
        return loadingReducer(state)
      }
      case ERROR_DELETE_GOAL: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_DELETE_GOAL: {
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
  export const getGoals = (params, extra = {}) => {
    return {
      types: [
        LOADING_GET_GOALS,
        SUCCESS_GET_GOALS,
        ERROR_GET_GOALS
      ],
      promise: () => listGoals(params),
      ...extra
    }
  }

  export const getOpenGoals = (params, extra = {}) => {
    return {
      types: [
        LOADING_GET_OPENGOALS,
        SUCCESS_GET_OPENGOALS,
        ERROR_GET_OPENGOALS
      ],
      promise: () => listOpenGoals(params),
      ...extra
    }
  }
  
  export const addGoal = (data, extra = {}) => {
    return {
      types: [LOADING_ADD_GOAL, SUCCESS_ADD_GOAL, ERROR_ADD_GOAL],
      promise: () => createGoal(data),
      ...extra
    }
  }
  
  export const getGoal = (id, params, extra = {}) => {
    return {
      types: [LOADING_GET_GOAL, SUCCESS_GET_GOAL, ERROR_GET_GOAL],
      promise: () => detailGoal(id, params),
      ...extra
    }
  }
  
  export const editGoal = (id, data, extra = {}) => {
    return {
      types: [
        LOADING_EDIT_GOAL,
        SUCCESS_EDIT_GOAL,
        ERROR_EDIT_GOAL
      ],
      promise: () => updateGoal(id, data),
      ...extra
    }
  }
  
  export const deleteGoal = (id, extra = {}) => {
    return {
      types: [
        LOADING_DELETE_GOAL,
        SUCCESS_DELETE_GOAL,
        ERROR_DELETE_GOAL
      ],
      promise: () => removeGoal(id),
      ...extra
    }
  }
  
  export const reloadState = () => {
    return {
      type: RELOAD_STATE
    }
  }
  