import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { PortfolioForm } from '../components/form'
// import { Loader, WarningAlert } from 'components-path'
import { Loader } from '../../../components/loader'
import { WarningAlert } from '../../../components/warningAlert'
import { getPortfolio, editPortfolio, reloadState } from '../../../redux/reducers/portfolio'
import {
  useReduxState,
  useReduxFetch,
  useReduxDispatch,
  useReduxEdit
} from '../../../hooks/redux'

const EditPortfolio = ({ role }) => {
  const router = useRouter()
  const protfolioState = useReduxState('portfolio')
  const fetchPortfolio = useReduxFetch(getPortfolio)
  const updatePortfolio = useReduxEdit(editPortfolio, 'Se edito el portafolio correctamente')
  const reload = useReduxDispatch(reloadState)

  useEffect(() => {
    reload()
    fetchPortfolio(router.query.id)
  }, [])

  const { current, error } = protfolioState

  if (!current) {
    if (error) {
      return <WarningAlert message={error} />
    }
    return <Loader />
  }

  const handleSubmit = (data, redirect, callback) => {
    const urlRedirect = redirect
      ? '/administrador/portafolio' : ''
    updatePortfolio(current._id, data, urlRedirect, callback)
    router.push(urlRedirect)
  }

  return (
    <PortfolioForm
      {...protfolioState}
      title={`Editar portafolio`}
      portfolio={current}
      onSubmit={handleSubmit}
    />
  )
}

export default EditPortfolio
