import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getUploads,
  editUpload,
  addUpload,
  deleteUpload,
  reloadState
} from '../redux/reducers/upload'

export const useUploads = ({bot}) => {
  const { list, loading, error, current } = useSelector(state => state.upload)
  const dispatch = useDispatch()

  const update = async (id, data) => {
    return dispatch(editUpload(id, data))
  }

  const create = async data => {
    console.log('data', data)
    return dispatch(addUpload(data))
  }

  const remove = async id => {
    return dispatch(deleteUpload(id))
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
