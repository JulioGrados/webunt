import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  editInterview,
  addInterview,
  deleteInterview,
  reloadState,
  getInterviews
} from '../redux/reducers/interview'

export const useInterviews = ({user}) => {
  const { list, loading, error, current, loaded } = useSelector(
    state => state.interview
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (list.length === 0 && loading === false && user) {
      dispatch(getInterviews({
        query: { user: user },
        populate: ['user', 'parent']
      }))
    }
  }, [])

  const update = async (id, data) => {
    return dispatch(editInterview(id, data))
  }

  const create = async data => {
    return dispatch(addInterview(data))
  }

  const remove = async id => {
    return dispatch(deleteInterview(id))
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
