import { useRouter } from 'next/router'
import { InitiativeForm } from '../components/form'
import { addInitiative } from '../../../redux/reducers/initiative'
import { useReduxAdd, useReduxState } from '../../../hooks/redux'

const AddInitiative = ({ role }) => {
  const router = useRouter()
  const initiativeState = useReduxState('initiative')
  const createInitiative = useReduxAdd(addInitiative, 'Se creo la iniciativa correctamente')

  const handleSubmit = (data, redirect, callback) => {
    const urlRedirect = redirect ? '/administrador/iniciativas' : ''
    createInitiative(data, urlRedirect, callback)
    router.push(urlRedirect)
  }

  return (
    <InitiativeForm
      {...initiativeState}
      title={`Crear iniciativa`}
      onSubmit={handleSubmit}
    />
  )
}

export default AddInitiative
