import { ProtfolioList } from '../components/list'
import { useEffect } from 'react'

import { getPortfolios, deletePortfolio } from '../../../redux/reducers/portfolio'
import {
  useReduxState,
  useReduxFetch,
  useReduxRemove
} from '../../../hooks/redux'

const ListPortfolios = ({ role }) => {
  const portfolioState = useReduxState('portfolio')
  const fetchPortfolios = useReduxFetch(getPortfolios)
  const handleDelete = useReduxRemove(
    deletePortfolio,
    'El portafolio se elimino correctamente'
  )

  useEffect(() => {
    if (portfolioState.list.length === 0) {
      fetchPortfolios()
    }
  }, [])

  // let portfolios = portfolioState.list.map(item => payloadToData(item))
  let portfolios = portfolioState.list
  // console.log('portfolioState.list', portfolioState.list)

  // if (role) {
  //   portfolios = portfolios.filter(user => user.roles.includes(role))
  // }

  return (
    <ProtfolioList
      {...portfolioState}
      role={role}
      portfolios={portfolios}
      handleDelete={handleDelete}
    />
  )
}

export default ListPortfolios
