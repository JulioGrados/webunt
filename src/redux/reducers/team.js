import {
    listTeams,
    listOpenTeams,
    createTeam,
    detailTeam,
    updateTeam,
    removeTeam
  } from 'utils/api/teams'
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
  
  const LOADING_GET_TEAMS = 'LOADING_GET_TEAMS'
  const SUCCESS_GET_TEAMS = 'SUCCESS_GET_TEAMS'
  const ERROR_GET_TEAMS = 'ERROR_GET_TEAMS'

  const LOADING_GET_OPENTEAMS = 'LOADING_GET_OPENTEAMS'
  const SUCCESS_GET_OPENTEAMS = 'SUCCESS_GET_OPENTEAMS'
  const ERROR_GET_OPENTEAMS = 'ERROR_GET_OPENTEAMS'
  
  const LOADING_ADD_TEAM = 'LOADING_ADD_TEAM'
  const SUCCESS_ADD_TEAM = 'SUCCESS_ADD_TEAM'
  const ERROR_ADD_TEAM = 'ERROR_ADD_TEAM'
  
  const LOADING_GET_TEAM = 'LOADING_GET_TEAM'
  const SUCCESS_GET_TEAM = 'SUCCESS_GET_TEAM'
  const ERROR_GET_TEAM = 'ERROR_GET_TEAM'
  
  const LOADING_EDIT_TEAM = 'LOADING_EDIT_TEAM'
  const SUCCESS_EDIT_TEAM = 'SUCCESS_EDIT_TEAM'
  const ERROR_EDIT_TEAM = 'ERROR_EDIT_TEAM'
  
  const LOADING_DELETE_TEAM = 'LOADING_DELETE_TEAM'
  const SUCCESS_DELETE_TEAM = 'SUCCESS_DELETE_TEAM'
  const ERROR_DELETE_TEAM = 'ERROR_DELETE_TEAM'
  
  const RELOAD_STATE = 'RELOAD_STATE'
  
  // reducer
  export default function reducer (state = initialValue, action) {
    switch (action.type) {
      // LIST
      case LOADING_GET_TEAMS: {
        return loadingReducer(state)
      }
      case ERROR_GET_TEAMS: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_GET_TEAMS: {
        return successReducer(state, {
          list: action.payload,
          loaded: true
        })
      }
      // LIST OPEN
      case LOADING_GET_OPENTEAMS: {
        return loadingReducer(state)
      }
      case ERROR_GET_OPENTEAMS: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_GET_OPENTEAMS: {
        return successReducer(state, {
          list: action.payload,
          loaded: true
        })
      }
      // CREATE
      case LOADING_ADD_TEAM: {
        return loadingReducer(state)
      }
      case ERROR_ADD_TEAM: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_ADD_TEAM: {
        return successReducer(state, {
          list: state.loaded ? [action.payload, ...state.list] : []
        })
      }
      // DETAIL
      case LOADING_GET_TEAM: {
        return loadingReducer(state)
      }
      case ERROR_GET_TEAM: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_GET_TEAM: {
        return successReducer(state, {
          current: action.payload
        })
      }
      // UPDATE
      case LOADING_EDIT_TEAM: {
        return loadingReducer(state)
      }
      case ERROR_EDIT_TEAM: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_EDIT_TEAM: {
        return successReducer(state, {
          list: updateItem(state.list, action.payload),
          current: action.payload
        })
      }
      // DELETE
      case LOADING_DELETE_TEAM: {
        return loadingReducer(state)
      }
      case ERROR_DELETE_TEAM: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_DELETE_TEAM: {
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
  export const getTeams = (params, extra = {}) => {
    return {
      types: [
        LOADING_GET_TEAMS,
        SUCCESS_GET_TEAMS,
        ERROR_GET_TEAMS
      ],
      promise: () => listTeams(params),
      ...extra
    }
  }

  export const getOpenTeams = (params, extra = {}) => {
    return {
      types: [
        LOADING_GET_TEAMS,
        SUCCESS_GET_TEAMS,
        ERROR_GET_TEAMS
      ],
      promise: () => listOpenTeams(params),
      ...extra
    }
  }
  
  export const addTeam = (data, extra = {}) => {
    return {
      types: [LOADING_ADD_TEAM, SUCCESS_ADD_TEAM, ERROR_ADD_TEAM],
      promise: () => createTeam(data),
      ...extra
    }
  }
  
  export const getTeam = (id, params, extra = {}) => {
    return {
      types: [LOADING_GET_TEAM, SUCCESS_GET_TEAM, ERROR_GET_TEAM],
      promise: () => detailTeam(id, params),
      ...extra
    }
  }
  
  export const editTeam = (id, data, extra = {}) => {
    return {
      types: [
        LOADING_EDIT_TEAM,
        SUCCESS_EDIT_TEAM,
        ERROR_EDIT_TEAM
      ],
      promise: () => updateTeam(id, data),
      ...extra
    }
  }
  
  export const deleteTeam = (id, extra = {}) => {
    return {
      types: [
        LOADING_DELETE_TEAM,
        SUCCESS_DELETE_TEAM,
        ERROR_DELETE_TEAM
      ],
      promise: () => removeTeam(id),
      ...extra
    }
  }
  
  export const reloadState = () => {
    return {
      type: RELOAD_STATE
    }
  }
  