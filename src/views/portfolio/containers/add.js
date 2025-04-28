import { useRouter } from 'next/router'
import { PortfolioForm } from '../components/form'
import { addPortfolio } from '../../../redux/reducers/portfolio'
import { useReduxAdd, useReduxState } from '../../../hooks/redux'

const AddPortfolio = ({ role }) => {
  const router = useRouter()
  const allyState = useReduxState('ally')
  const createPortfolio = useReduxAdd(addPortfolio, 'Se creo la portafolio correctamente')

  const handleSubmit = (data, redirect, callback) => {
    const urlRedirect = redirect ? '/administrador/portafolio' : ''
    createPortfolio(data, urlRedirect, callback)
    router.push(urlRedirect)
  }

  return (
    <PortfolioForm
      {...allyState}
      title={`Crear Portafolio`}
      onSubmit={handleSubmit}
    />
  )
}

export default AddPortfolio
