import {
    listPortfolios,
    listOpenPortfolios,
    createPortfolio,
    detailPortfolio,
    updatePortfolio,
    removePortfolio
  } from 'utils/api/portfolios'
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
  
  const LOADING_GET_PORTFOLIOS = 'LOADING_GET_PORTFOLIOS'
  const SUCCESS_GET_PORTFOLIOS = 'SUCCESS_GET_PORTFOLIOS'
  const ERROR_GET_PORTFOLIOS = 'ERROR_GET_PORTFOLIOS'

  const LOADING_GET_OPENPORTFOLIOS = 'LOADING_GET_OPENPORTFOLIOS'
  const SUCCESS_GET_OPENPORTFOLIOS = 'SUCCESS_GET_OPENPORTFOLIOS'
  const ERROR_GET_OPENPORTFOLIOS = 'ERROR_GET_OPENPORTFOLIOS'
  
  const LOADING_ADD_PORTFOLIO = 'LOADING_ADD_PORTFOLIO'
  const SUCCESS_ADD_PORTFOLIO = 'SUCCESS_ADD_PORTFOLIO'
  const ERROR_ADD_PORTFOLIO = 'ERROR_ADD_PORTFOLIO'
  
  const LOADING_GET_PORTFOLIO = 'LOADING_GET_PORTFOLIO'
  const SUCCESS_GET_PORTFOLIO = 'SUCCESS_GET_PORTFOLIO'
  const ERROR_GET_PORTFOLIO = 'ERROR_GET_PORTFOLIO'
  
  const LOADING_EDIT_PORTFOLIO = 'LOADING_EDIT_PORTFOLIO'
  const SUCCESS_EDIT_PORTFOLIO = 'SUCCESS_EDIT_PORTFOLIO'
  const ERROR_EDIT_PORTFOLIO = 'ERROR_EDIT_PORTFOLIO'
  
  const LOADING_DELETE_PORTFOLIO = 'LOADING_DELETE_PORTFOLIO'
  const SUCCESS_DELETE_PORTFOLIO = 'SUCCESS_DELETE_PORTFOLIO'
  const ERROR_DELETE_PORTFOLIO = 'ERROR_DELETE_PORTFOLIO'
  
  const RELOAD_STATE = 'RELOAD_STATE'
  
  // reducer
  export default function reducer (state = initialValue, action) {
    switch (action.type) {
      // LIST
      case LOADING_GET_PORTFOLIOS: {
        return loadingReducer(state)
      }
      case ERROR_GET_PORTFOLIOS: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_GET_PORTFOLIOS: {
        return successReducer(state, {
          list: action.payload,
          loaded: true
        })
      }
      // LIST OPEN
      case LOADING_GET_OPENPORTFOLIOS: {
        return loadingReducer(state)
      }
      case ERROR_GET_OPENPORTFOLIOS: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_GET_OPENPORTFOLIOS: {
        return successReducer(state, {
          list: action.payload,
          loaded: true
        })
      }
      // CREATE
      case LOADING_ADD_PORTFOLIO: {
        return loadingReducer(state)
      }
      case ERROR_ADD_PORTFOLIO: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_ADD_PORTFOLIO: {
        return successReducer(state, {
          list: state.loaded ? [action.payload, ...state.list] : []
        })
      }
      // DETAIL
      case LOADING_GET_PORTFOLIO: {
        return loadingReducer(state)
      }
      case ERROR_GET_PORTFOLIO: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_GET_PORTFOLIO: {
        return successReducer(state, {
          current: action.payload
        })
      }
      // UPDATE
      case LOADING_EDIT_PORTFOLIO: {
        return loadingReducer(state)
      }
      case ERROR_EDIT_PORTFOLIO: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_EDIT_PORTFOLIO: {
        return successReducer(state, {
          list: updateItem(state.list, action.payload),
          current: action.payload
        })
      }
      // DELETE
      case LOADING_DELETE_PORTFOLIO: {
        return loadingReducer(state)
      }
      case ERROR_DELETE_PORTFOLIO: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_DELETE_PORTFOLIO: {
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
  export const getPortfolios = (params, extra = {}) => {
    return {
      types: [
        LOADING_GET_PORTFOLIOS,
        SUCCESS_GET_PORTFOLIOS,
        ERROR_GET_PORTFOLIOS
      ],
      promise: () => listPortfolios(params),
      ...extra
    }
  }

  export const getOpenPortfolios = (params, extra = {}) => {
    return {
      types: [
        LOADING_GET_OPENPORTFOLIOS,
        SUCCESS_GET_OPENPORTFOLIOS,
        ERROR_GET_OPENPORTFOLIOS
      ],
      promise: () => listOpenPortfolios(params),
      ...extra
    }
  }
  
  export const addPortfolio = (data, extra = {}) => {
    return {
      types: [LOADING_ADD_PORTFOLIO, SUCCESS_ADD_PORTFOLIO, ERROR_ADD_PORTFOLIO],
      promise: () => createPortfolio(data),
      ...extra
    }
  }
  
  export const getPortfolio = (id, params, extra = {}) => {
    return {
      types: [LOADING_GET_PORTFOLIO, SUCCESS_GET_PORTFOLIO, ERROR_GET_PORTFOLIO],
      promise: () => detailPortfolio(id, params),
      ...extra
    }
  }
  
  export const editPortfolio = (id, data, extra = {}) => {
    return {
      types: [
        LOADING_EDIT_PORTFOLIO,
        SUCCESS_EDIT_PORTFOLIO,
        ERROR_EDIT_PORTFOLIO
      ],
      promise: () => updatePortfolio(id, data),
      ...extra
    }
  }
  
  export const deletePortfolio = (id, extra = {}) => {
    return {
      types: [
        LOADING_DELETE_PORTFOLIO,
        SUCCESS_DELETE_PORTFOLIO,
        ERROR_DELETE_PORTFOLIO
      ],
      promise: () => removePortfolio(id),
      ...extra
    }
  }
  
  export const reloadState = () => {
    return {
      type: RELOAD_STATE
    }
  }
  