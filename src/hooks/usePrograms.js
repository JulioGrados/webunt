import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getPrograms,
  editProgram,
  addProgram,
  deleteProgram,
  reloadState,
  getOpenPrograms
} from '../redux/reducers/program'

export const usePrograms = () => {
  const { list, loading, error, current } = useSelector(state => state.program)
  const dispatch = useDispatch()
    useEffect(() => {
      if (list.length === 0 && loading === false) {
        dispatch(getOpenPrograms())
      }
    }, [])

  const update = async (id, data) => {
    return dispatch(editProgram(id, data))
  }

  const create = async data => {
    console.log('data', data)
    return dispatch(addProgram(data))
  }

  const remove = async id => {
    return dispatch(deleteProgram(id))
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
    reload
  }
}
