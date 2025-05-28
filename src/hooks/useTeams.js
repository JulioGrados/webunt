import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  getTeams,
  editTeam,
  addTeam,
  deleteTeam,
  reloadState,
  getOpenTeams
} from '../redux/reducers/team'

export const useTeams = () => {
  const { list, loading, error, current, loaded } = useSelector(
    state => state.team
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (list.length === 0 && loading === false) {
      dispatch(getOpenTeams())
    }
  }, [])

  const update = async (id, data) => {
    return dispatch(editTeam(id, data))
  }

  const create = async data => {
    return dispatch(addTeam(data))
  }

  const remove = async id => {
    return dispatch(deleteTeam(id))
  }

  const reload = async () => {
    return dispatch(reloadState())
  }

  return {
    list: list && list.reverse(),
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
