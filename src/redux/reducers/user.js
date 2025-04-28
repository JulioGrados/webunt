import {
  listUsers,
  createUser,
  detailUser,
  updateUser,
  removeUser
} from 'utils/api/users'

import {
  errorReducer,
  cleanReducer,
  loadingReducer,
  successReducer,
  updateItem,
  removeItem
} from 'utils/functions/reducers'

import { payloadToData } from 'utils/functions/user'

const generateList = list => {
  let newList = []
  list.forEach(item => {
    newList = updateItemList(item, newList)
  })
  return newList
}

const updateItemList = (item, list) => {
  const progress = item.statusProgress
  if (progress) {
    const indexProgress = list.findIndex(
      itemP => itemP.progress === progress.ref
    )
    if (indexProgress === -1) {
      if (progress.ref) {
        list.push({
          progress: progress.ref,
          leads: [payloadToData(item)]
        })
        list = deleteItem(list, item, progress)
      }
    } else {
      const index = list[indexProgress].leads.findIndex(
        lead => lead._id === item._id
      )
      if (index !== -1) {
        list[indexProgress].leads[index] = payloadToData(item)
        list[indexProgress].leads = sortLeads(list[indexProgress].leads)
      } else {
        try {
          list[indexProgress].leads.unshift(payloadToData(item))
          list[indexProgress].leads = sortLeads(list[indexProgress].leads)

          list = deleteItem(list, item, progress)
        } catch (error) {
          console.error('err', error)
        }
      }
    }
  }
  return list
}

const deleteItem = (list, item, progress) => {
  list.forEach(progressItem => {
    if (progressItem.progress !== progress.ref) {
      const indexItem = progressItem.leads.findIndex(
        lead => lead._id === item._id
      )
      if (indexItem !== -1) {
        progressItem.leads.splice(indexItem, 1)
      }
    }
  })

  return list
}

const moveItem = (list, soruce, index, destination, newIndex) => {
  const idxSource = list.findIndex(itemP => itemP.progress === soruce)
  const idxDestination = list.findIndex(itemP => itemP.progress === destination)

  const item = list[idxSource].leads[index]

  if (idxSource !== -1) {
    list[idxSource].leads.splice(index, 1)
  }

  if (idxDestination !== -1) {
    list[idxDestination].leads.splice(newIndex, 0, item)
    list[idxDestination].leads = sortLeads(list[idxDestination].leads)
  }

  return list
}

const sortLeads = leads => {
  const delay = leads.filter(lead => lead.statusActivity === 'delay')
  const todo = leads.filter(lead => lead.statusActivity === 'todo')
  const done = leads.filter(lead => lead.statusActivity === 'done')
  return [...delay, ...todo, ...done]
}

// const
const initialValue = {
  list: [],
  temp: [],
  assessors: [],
  current: null,
  loading: false,
  loaded: false,
  error: ''
}

const LOADING_GET_USERS = 'LOADING_GET_USERS'
const SUCCESS_GET_USERS = 'SUCCESS_GET_USERS'
const ERROR_GET_USERS = 'ERROR_GET_USERS'
const SUCCESS_UPDATE_USERS = 'SUCCESS_UPDATE_USERS'

const LOADING_GET_ASSESSORS = 'LOADING_GET_ASSESSORS'
const SUCCESS_GET_ASSESSORS = 'SUCCESS_GET_ASSESSORS'
const ERROR_GET_ASSESSORS = 'ERROR_GET_ASSESSORS'

const LOADING_SEARCH_USERS = 'LOADING_SEARCH_USERS'
const SUCCESS_SEARCH_USERS = 'SUCCESS_SEARCH_USERS'
const ERROR_SEARCH_USERS = 'ERROR_SEARCH_USERS'

const LOADING_ADD_USER = 'LOADING_ADD_USER'
const SUCCESS_ADD_USER = 'SUCCESS_ADD_USER'
const ERROR_ADD_USER = 'ERROR_ADD_USER'

const LOADING_ADDORUPDATE_USER = 'LOADING_ADDORUPDATE_USER'
const SUCCESS_ADDORUPDATE_USER = 'SUCCESS_ADDORUPDATE_USER'
const ERROR_ADDORUPDATE_USER = 'ERROR_ADDORUPDATE_USER'

const LOADING_GET_USER = 'LOADING_GET_USER'
const SUCCESS_GET_USER = 'SUCCESS_GET_USER'
const ERROR_GET_USER = 'ERROR_GET_USER'

const LOADING_EDIT_USER = 'LOADING_EDIT_USER'
const SUCCESS_EDIT_USER = 'SUCCESS_EDIT_USER'
const ERROR_EDIT_USER = 'ERROR_EDIT_USER'

const LOADING_DELETE_USER = 'LOADING_DELETE_USER'
const SUCCESS_DELETE_USER = 'SUCCESS_DELETE_USER'
const ERROR_DELETE_USER = 'ERROR_DELETE_USER'

const ADD_CURRENT = 'ADD_CURRENT'
const DELETE_CURRENT = 'DELETE_CURRENT'

const RELOAD_STATE = 'RELOAD_STATE'

// reducer
export default function reducer (state = initialValue, action) {
  switch (action.type) {
    // LIST
    case LOADING_GET_USERS: {
      return loadingReducer(state)
    }
    case ERROR_GET_USERS: {
      return errorReducer(state, action.payload)
    }
    case SUCCESS_GET_USERS: {
      return successReducer(state, {
        list: action.payload,
        loaded: true
      })
    }
    case SUCCESS_UPDATE_USERS: {
      return successReducer(state, {
        list: action.payload,
        loaded: true
      })
    }
    // ASSESORS
    case LOADING_GET_ASSESSORS: {
      return loadingReducer(state)
    }
    case ERROR_GET_ASSESSORS: {
      return errorReducer(state, action.payload)
    }
    case SUCCESS_GET_ASSESSORS: {
      return successReducer(state, {
        assessors: action.payload,
        loaded: true
      })
    }
    // SEARCH
    case LOADING_SEARCH_USERS: {
      return loadingReducer(state)
    }
    case ERROR_SEARCH_USERS: {
      return errorReducer(state, action.payload)
    }
    case SUCCESS_SEARCH_USERS: {
      return successReducer(state, {
        temp: action.payload
      })
    }
    // CREATE
    case LOADING_ADD_USER: {
      return loadingReducer(state)
    }
    case ERROR_ADD_USER: {
      return errorReducer(state, action.payload)
    }
    case SUCCESS_ADD_USER: {
      return successReducer(state, {
        list: state.loaded ? [action.payload, ...state.list] : []
      })
    }
    // ADDORUPDATE
    case LOADING_ADDORUPDATE_USER: {
      return loadingReducer(state)
    }
    case ERROR_ADDORUPDATE_USER: {
      return errorReducer(state, action.payload)
    }
    case SUCCESS_ADDORUPDATE_USER: {
      return successReducer(state, {
        list: state.loaded ? updateItemList(action.payload, state.list) : [],
        loading: false,
        error: ''
      })
    }
    // DETAIL
    case LOADING_GET_USER: {
      return loadingReducer(state)
    }
    case ERROR_GET_USER: {
      return errorReducer(state, action.payload)
    }
    case SUCCESS_GET_USER: {
      return successReducer(state, {
        current: payloadToData(action.payload)
      })
    }
    // UPDATE
    case LOADING_EDIT_USER: {
      return loadingReducer(state)
    }
    case ERROR_EDIT_USER: {
      return errorReducer(state, action.payload)
    }
    case SUCCESS_EDIT_USER: {
      return successReducer(state, {
        list: updateItem(state.list, action.payload),
        current: action.payload
      })
    }
    // DELETE
    case LOADING_DELETE_USER: {
      return loadingReducer(state)
    }
    case ERROR_DELETE_USER: {
      return errorReducer(state, action.payload)
    }
    case SUCCESS_DELETE_USER: {
      return successReducer(state, {
        list: removeItem(state.list, action.payload)
      })
    }
    // CURRENT
    case ADD_CURRENT: {
      return {
        ...state,
        current: action.payload
      }
    }
    case DELETE_CURRENT: {
      return {
        ...state,
        current: null
      }
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
export const getUsers = (params, extra = {}) => {
  return {
    types: [LOADING_GET_USERS, SUCCESS_GET_USERS, ERROR_GET_USERS],
    promise: () => listUsers(params),
    ...extra
  }
}

export const getAssessors = (params, extra = {}) => {
  return {
    types: [LOADING_GET_ASSESSORS, SUCCESS_GET_ASSESSORS, ERROR_GET_ASSESSORS],
    promise: () => listUsers(params),
    ...extra
  }
}

export const addUser = (data, extra = {}) => {
  return {
    types: [LOADING_ADD_USER, SUCCESS_ADD_USER, ERROR_ADD_USER],
    promise: () => createUser(data),
    ...extra
  }
}

export const deleteUser = (id, extra = {}) => {
  return {
    types: [
      LOADING_DELETE_USER,
      SUCCESS_DELETE_USER,
      ERROR_DELETE_USER
    ],
    promise: () => removeUser(id),
    ...extra
  }
}

export const addCurrent = user => {
  return {
    type: ADD_CURRENT,
    payload: user
  }
}

export const deleteCurrent = () => {
  return {
    type: DELETE_CURRENT
  }
}

export const getUser = (id, params, extra = {}) => {
  return {
    types: [LOADING_GET_USER, SUCCESS_GET_USER, ERROR_GET_USER],
    promise: () => detailUser(id, params),
    ...extra
  }
}

export const editUser = (id, data, extra = {}) => {
  return {
    types: [LOADING_EDIT_USER, SUCCESS_EDIT_USER, ERROR_EDIT_USER],
    promise: () => updateUser(id, data),
    ...extra
  }
}

export const searchUser = (params, extra = {}) => {
  return {
    types: [LOADING_SEARCH_USERS, SUCCESS_SEARCH_USERS, ERROR_SEARCH_USERS],
    promise: () => listUsers(params),
    ...extra
  }
}

export const addOrEditUser = user => {
  return {
    type: SUCCESS_EDIT_USER,
    payload: user
  }
}

export const moveLead = (soruce, index, destination, newIndex) => (
  dispach,
  getState
) => {
  const state = getState()
  const list = state.user.list

  const newList = moveItem(list, soruce, index, destination, newIndex)

  dispach({
    type: SUCCESS_UPDATE_USERS,
    payload: newList
  })
}

export const reloadState = () => {
  return {
    type: RELOAD_STATE
  }
}
