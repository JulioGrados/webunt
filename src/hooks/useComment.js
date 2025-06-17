import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  editComment,
  addComment,
  deleteComment,
  reloadState,
  getComments
} from '../redux/reducers/comment'

export const useComments = ({user, result}) => {
  const { list, loading, error, current, loaded } = useSelector(
    state => state.comment
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (list.length === 0 && loading === false && user) {
      dispatch(getComments({
        query: { user: user },
        populate: ['user', 'linked']
      }))
    }
  }, [])

  useEffect(() => {
      if (user && result) {
        console.log('entro de nuevo comment')
        dispatch(getComments({
          query: { user: user },
          populate: ['user', 'linked']
        }))
      }
    }, [user])

  const update = async (id, data) => {
    return dispatch(editComment(id, data))
  }

  const create = async data => {
    console.log('data', data)
    return dispatch(addComment(data))
  }

  const remove = async id => {
    return dispatch(deleteComment(id))
  }

  const reload = async () => {
    return dispatch(reloadState())
  }

  return {
    list,
    loading,
    update,
    create,
    error,
    current,
    remove,
    loaded,
    reload
  }
}
