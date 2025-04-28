import { useRouter } from 'next/router'
import { AllyForm } from '../components/form'
import { addAlly } from '../../../redux/reducers/ally'
import { useReduxAdd, useReduxState } from '../../../hooks/redux'

const AddAlly = ({ role }) => {
  const router = useRouter()
  const allyState = useReduxState('ally')
  const createAlly = useReduxAdd(addAlly, 'Se creo la página correctamente')

  const handleSubmit = (data, redirect, callback) => {
    const urlRedirect = redirect ? '/administrador/aliados' : ''
    createAlly(data, urlRedirect, callback)
    router.push(urlRedirect)
  }

  return (
    <AllyForm
      {...allyState}
      title={`Crear aliado`}
      onSubmit={handleSubmit}
    />
  )
}

export default AddAlly
