import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  getAllys,
  editAlly,
  addAlly,
  deleteAlly,
  reloadState
} from '../redux/reducers/ally'

export const useAllys = () => {
  const { list, loading, error, current, loaded } = useSelector(
    state => state.ally
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (list.length === 0 && loading === false) {
      dispatch(getAllys())
    }
  }, [])

  const update = async (id, data) => {
    return dispatch(editAlly(id, data))
  }

  const create = async data => {
    return dispatch(addAlly(data))
  }

  const remove = async id => {
    return dispatch(deleteAlly(id))
  }

  const reload = async () => {
    return dispatch(reloadState())
  }

  const allys = list

  return {
    allys,
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
