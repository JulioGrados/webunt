import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  getInitiatives,
  editInitiative,
  addInitiative,
  deleteInitiative,
  reloadState
} from '../redux/reducers/initiative'

export const useInitiatives = () => {
  const { list, loading, error, current, loaded } = useSelector(
    state => state.initiative
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (list.length === 0 && loading === false) {
      dispatch(getInitiatives())
    }
  }, [])

  const update = async (id, data) => {
    return dispatch(editInitiative(id, data))
  }

  const create = async data => {
    return dispatch(addInitiative(data))
  }

  const remove = async id => {
    return dispatch(deleteInitiative(id))
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
