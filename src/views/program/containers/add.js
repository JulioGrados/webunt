import { useRouter } from 'next/router'
import { ProgramForm } from '../components/form'
import { addProgram } from '../../../redux/reducers/program'
import { useReduxAdd, useReduxState } from '../../../hooks/redux'

const AddProgram = ({ role }) => {
  const router = useRouter()
  const programState = useReduxState('ally')
  const createProgram = useReduxAdd(addProgram, 'Se creo la página correctamente')

  const handleSubmit = (data, redirect, callback) => {
    const urlRedirect = redirect ? '/administrador/programas' : ''
    createProgram(data, urlRedirect, callback)
    router.push(urlRedirect)
  }

  return (
    <ProgramForm
      {...programState}
      title={`Crear programa`}
      onSubmit={handleSubmit}
    />
  )
}

export default AddProgram
