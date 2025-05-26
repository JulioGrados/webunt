import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  getGoals,
  getOpenGoals,
  editGoal,
  addGoal,
  deleteGoal,
  reloadState
} from '../redux/reducers/goal'

export const useGoals = () => {
  const { list, loading, error, current, loaded } = useSelector(
    state => state.goal
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (list.length === 0 && loading === false) {
      dispatch(getOpenGoals())
    }
  }, [])

  const update = async (id, data) => {
    return dispatch(editGoal(id, data))
  }

  const create = async data => {
    return dispatch(addGoal(data))
  }

  const remove = async id => {
    return dispatch(deleteGoal(id))
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
