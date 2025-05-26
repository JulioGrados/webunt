import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  getPortfolios,
  editPortfolio,
  addPortfolio,
  deletePortfolio,
  reloadState,
  getOpenPortfolios
} from '../redux/reducers/portfolio'

export const usePortfolio = () => {
  const { list, loading, error, current, loaded } = useSelector(
    state => state.portfolio
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (list.length === 0 && loading === false) {
      dispatch(getOpenPortfolios())
    }
  }, [])

  const update = async (id, data) => {
    return dispatch(editPortfolio(id, data))
  }

  const create = async data => {
    return dispatch(addPortfolio(data))
  }

  const remove = async id => {
    return dispatch(deletePortfolio(id))
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
