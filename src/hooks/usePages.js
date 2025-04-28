import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  getPages,
  editPage,
  addPage,
  deletePage,
  reloadState
} from '../redux/reducers/page'

export const usePages = () => {
  const { list, loading, error, current, loaded } = useSelector(
    state => state.page
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (list.length === 0 && loading === false) {
      dispatch(getPages())
    }
  }, [])

  const update = async (id, data) => {
    return dispatch(editPage(id, data))
  }

  const create = async data => {
    return dispatch(addPage(data))
  }

  const remove = async id => {
    return dispatch(deletePage(id))
  }

  const reload = async () => {
    return dispatch(reloadState())
  }

  const companies = list

  return {
    companies,
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
