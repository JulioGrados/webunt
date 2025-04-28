import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getPortfolios } from '../redux/portfolio'

export const useCategories = () => {
  const { list, loading, loaded } = useSelector(state => state.portfolio)
  const dispatch = useDispatch()

  useEffect(() => {
    if (list.length === 0 && loading === false) {
      dispatch(
        getPortfolios({
          sort: 'order'
        })
      )
    }
  }, [])

  const portfolios = list

  return {
    portfolios,
    loading,
    loaded
  }
}
