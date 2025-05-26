import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  getMentors,
  editMentor,
  addMentor,
  deleteMentor,
  reloadState,
  getOpenMentors
} from '../redux/reducers/mentor'

export const useMentors = () => {
  const { list, loading, error, current, loaded } = useSelector(
    state => state.mentor
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (list.length === 0 && loading === false) {
      dispatch(getOpenMentors())
    }
  }, [])

  const update = async (id, data) => {
    return dispatch(editMentor(id, data))
  }

  const create = async data => {
    return dispatch(addMentor(data))
  }

  const remove = async id => {
    return dispatch(deleteMentor(id))
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
