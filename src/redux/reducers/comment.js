import {
    listComments,
    listOpenComments,
    createComment,
    detailComment,
    updateComment,
    removeComment
  } from 'utils/api/comments'
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
  
  const LOADING_GET_COMMENTS = 'LOADING_GET_COMMENTS'
  const SUCCESS_GET_COMMENTS = 'SUCCESS_GET_COMMENTS'
  const ERROR_GET_COMMENTS = 'ERROR_GET_COMMENTS'

  const LOADING_GET_OPENCOMMENTS = 'LOADING_GET_OPENCOMMENTS'
  const SUCCESS_GET_OPENCOMMENTS = 'SUCCESS_GET_OPENCOMMENTS'
  const ERROR_GET_OPENCOMMENTS = 'ERROR_GET_OPENCOMMENTS'
  
  const LOADING_ADD_COMMENT = 'LOADING_ADD_COMMENT'
  const SUCCESS_ADD_COMMENT = 'SUCCESS_ADD_COMMENT'
  const ERROR_ADD_COMMENT = 'ERROR_ADD_COMMENT'
  
  const LOADING_GET_COMMENT = 'LOADING_GET_COMMENT'
  const SUCCESS_GET_COMMENT = 'SUCCESS_GET_COMMENT'
  const ERROR_GET_COMMENT = 'ERROR_GET_COMMENT'
  
  const LOADING_EDIT_COMMENT = 'LOADING_EDIT_COMMENT'
  const SUCCESS_EDIT_COMMENT = 'SUCCESS_EDIT_COMMENT'
  const ERROR_EDIT_COMMENT = 'ERROR_EDIT_COMMENT'
  
  const LOADING_DELETE_COMMENT = 'LOADING_DELETE_COMMENT'
  const SUCCESS_DELETE_COMMENT = 'SUCCESS_DELETE_COMMENT'
  const ERROR_DELETE_COMMENT = 'ERROR_DELETE_COMMENT'
  
  const RELOAD_STATE = 'RELOAD_STATE'
  
  // reducer
  export default function reducer (state = initialValue, action) {
    switch (action.type) {
      // LIST
      case LOADING_GET_COMMENTS: {
        return loadingReducer(state)
      }
      case ERROR_GET_COMMENTS: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_GET_COMMENTS: {
        return successReducer(state, {
          list: action.payload,
          loaded: true
        })
      }
      // LIST OPEN
      case LOADING_GET_OPENCOMMENTS: {
        return loadingReducer(state)
      }
      case ERROR_GET_OPENCOMMENTS: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_GET_OPENCOMMENTS: {
        return successReducer(state, {
          list: action.payload,
          loaded: true
        })
      }
      // CREATE
      case LOADING_ADD_COMMENT: {
        return loadingReducer(state)
      }
      case ERROR_ADD_COMMENT: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_ADD_COMMENT: {
        return successReducer(state, {
          list: state.loaded ? [action.payload, ...state.list] : []
        })
      }
      // DETAIL
      case LOADING_GET_COMMENT: {
        return loadingReducer(state)
      }
      case ERROR_GET_COMMENT: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_GET_COMMENT: {
        return successReducer(state, {
          current: action.payload
        })
      }
      // UPDATE
      case LOADING_EDIT_COMMENT: {
        return loadingReducer(state)
      }
      case ERROR_EDIT_COMMENT: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_EDIT_COMMENT: {
        return successReducer(state, {
          list: updateItem(state.list, action.payload),
          current: action.payload
        })
      }
      // DELETE
      case LOADING_DELETE_COMMENT: {
        return loadingReducer(state)
      }
      case ERROR_DELETE_COMMENT: {
        return errorReducer(state, action.payload)
      }
      case SUCCESS_DELETE_COMMENT: {
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
  export const getComments = (params, extra = {}) => {
    return {
      types: [
        LOADING_GET_COMMENTS,
        SUCCESS_GET_COMMENTS,
        ERROR_GET_COMMENTS
      ],
      promise: () => listComments(params),
      ...extra
    }
  }

  export const getOpenComments = (params, extra = {}) => {
    return {
      types: [
        LOADING_GET_OPENCOMMENTS,
        SUCCESS_GET_OPENCOMMENTS,
        ERROR_GET_OPENCOMMENTS
      ],
      promise: () => listOpenComments(params),
      ...extra
    }
  }
  
  export const addComment = (data, extra = {}) => {
    console.log('data', data)
    return {
      types: [LOADING_ADD_COMMENT, SUCCESS_ADD_COMMENT, ERROR_ADD_COMMENT],
      promise: () => createComment(data),
      ...extra
    }
  }
  
  export const getComment = (id, params, extra = {}) => {
    return {
      types: [LOADING_GET_COMMENT, SUCCESS_GET_COMMENT, ERROR_GET_COMMENT],
      promise: () => detailComment(id, params),
      ...extra
    }
  }
  
  export const editComment = (id, data, extra = {}) => {
    return {
      types: [
        LOADING_EDIT_COMMENT,
        SUCCESS_EDIT_COMMENT,
        ERROR_EDIT_COMMENT
      ],
      promise: () => updateComment(id, data),
      ...extra
    }
  }
  
  export const deleteComment = (id, extra = {}) => {
    return {
      types: [
        LOADING_DELETE_COMMENT,
        SUCCESS_DELETE_COMMENT,
        ERROR_DELETE_COMMENT
      ],
      promise: () => removeComment(id),
      ...extra
    }
  }
  
  export const reloadState = () => {
    return {
      type: RELOAD_STATE
    }
  }
  