import {
    listPages,
    createPage,
    detailPage,
    updatePage,
    removePage
  } from 'utils/api/pages'
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
  
  const LOADING_GET_PAGES = 'LOADING_GET_PAGES'
  const SUCCESS_GET_PAGES = 'SUCCESS_GET_PAGES'
  const ERROR_GET_PAGES = 'ERROR_GET_PAGES'
  
  const LOADING_ADD_PAGE = 'LOADING_ADD_PAGE'
  const SUCCESS_ADD_PAGE = 'SUCCESS_ADD_PAGE'
  const ERROR_ADD_PAGE = 'ERROR_ADD_PAGE'
  
  const LOADING_GET_PAGE = 'LOADING_GET_PAGE'
  const SUCCESS_GET_PAGE = 'SUCCESS_GET_PAGE'
  const ERROR_GET_PAGE = 'ERROR_GET_PAGE'
  
  const LOADING_EDIT_PAGE = 'LOADING_EDIT_PAGE'
  const SUCCESS_EDIT_PAGE = 'SUCCESS_EDIT_PAGE'
  const ERROR_EDIT_PAGE = 'ERROR_EDIT_PAGE'
  
  const LOADING_DELETE_PAGE = 'LOADING_DELETE_PAGE'
  const SUCCESS_DELETE_PAGE = 'SUCCESS_DELETE_PAGE'
  const ERROR_DELETE_PAGE = 'ERROR_DELETE_PAGE'
  
  const RELOAD_STATE = 'RELOAD_STATE'
  
  // reducer
  export default function reducer (state = initialValue, action) {
    switch (action.type) {
      // LIST
      case LOADING_GET_PAGES: {
        return loadingReducer(state)
      }
      case ERROR_GET_PAGES: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_GET_PAGES: {
        return successReducer(state, {
          list: action.payload,
          loaded: true
        })
      }
      // CREATE
      case LOADING_ADD_PAGE: {
        return loadingReducer(state)
      }
      case ERROR_ADD_PAGE: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_ADD_PAGE: {
        return successReducer(state, {
          list: state.loaded ? [action.payload, ...state.list] : []
        })
      }
      // DETAIL
      case LOADING_GET_PAGE: {
        return loadingReducer(state)
      }
      case ERROR_GET_PAGE: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_GET_PAGE: {
        return successReducer(state, {
          current: action.payload
        })
      }
      // UPDATE
      case LOADING_EDIT_PAGE: {
        return loadingReducer(state)
      }
      case ERROR_EDIT_PAGE: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_EDIT_PAGE: {
        return successReducer(state, {
          list: updateItem(state.list, action.payload),
          current: action.payload
        })
      }
      // DELETE
      case LOADING_DELETE_PAGE: {
        return loadingReducer(state)
      }
      case ERROR_DELETE_PAGE: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_DELETE_PAGE: {
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
  export const getPages = (params, extra = {}) => {
    return {
      types: [
        LOADING_GET_PAGES,
        SUCCESS_GET_PAGES,
        ERROR_GET_PAGES
      ],
      promise: () => listPages(params),
      ...extra
    }
  }
  
  export const addPage = (data, extra = {}) => {
    return {
      types: [LOADING_ADD_PAGE, SUCCESS_ADD_PAGE, ERROR_ADD_PAGE],
      promise: () => createPage(data),
      ...extra
    }
  }
  
  export const getPage = (id, params, extra = {}) => {
    return {
      types: [LOADING_GET_PAGE, SUCCESS_GET_PAGE, ERROR_GET_PAGE],
      promise: () => detailPage(id, params),
      ...extra
    }
  }
  
  export const editPage = (id, data, extra = {}) => {
    return {
      types: [
        LOADING_EDIT_PAGE,
        SUCCESS_EDIT_PAGE,
        ERROR_EDIT_PAGE
      ],
      promise: () => updatePage(id, data),
      ...extra
    }
  }
  
  export const deletePage = (id, extra = {}) => {
    return {
      types: [
        LOADING_DELETE_PAGE,
        SUCCESS_DELETE_PAGE,
        ERROR_DELETE_PAGE
      ],
      promise: () => removePage(id),
      ...extra
    }
  }
  
  export const reloadState = () => {
    return {
      type: RELOAD_STATE
    }
  }
  