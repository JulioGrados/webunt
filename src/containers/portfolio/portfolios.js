import { useEffect } from 'react'

import { ListTPortfolios } from '../../components'
import { getPortfolios } from '../../redux/user'
import { useReduxState, useReduxFetch } from '../../hooks/redux'

const UserList = props => {
  const { portfolios, loading } = useReduxState('user')
  const fetch = useReduxFetch(getPortfolios)
  useEffect(() => {
    if (portfolios.length === 0) {
      fetch()
    }
  }, [])

  return <ListTPortfolios {...props} portfolios={portfolios} loading={loading} />
}

export default UserList
