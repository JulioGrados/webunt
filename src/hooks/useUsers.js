import { useSelector, useDispatch } from 'react-redux'

import {
  editUser,
  getUser,
  getUsers,
  addUser,
  deleteUser,
  reloadState
} from '../redux/reducers/user'
import { useEffect } from 'react'

export const useUsers = () => {
  const { list, loading, error, current, loaded } = useSelector(
    state => state.user
  )

  useEffect(() => {
    if (list.length === 0 && loading === false) {
      dispatch(getUsers({
        query: { rol: 'emprendedor' },
      }))
    }
  }, [])
  
  const dispatch = useDispatch()

  const total = async (query) => {
    return dispatch(getUsers({query: {rol: 'emprendedor'}}))
  }

  const update = async (id, data) => {
    return dispatch(editUser(id, { ...data }))
  }

  const detail = async (id, data = {}) => {
    return dispatch(getUser(id, { ...data }))
  }

  const create = async data => {
    return dispatch(addUser({ ...data }))
  }

  const remove = async id => {
    return dispatch(deleteUser(id))
  }

  const reload = async () => {
    return dispatch(reloadState())
  }

  const users = list

  return {
    users,
    total,
    loading,
    detail,
    update,
    create,
    current,
    remove,
    loaded,
    reload
  }
}
