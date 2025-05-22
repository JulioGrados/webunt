import { useRouter } from 'next/router'
import { MentorForm } from '../components/form'
import { addMentor } from '../../../redux/reducers/mentor'
import { useReduxAdd, useReduxState } from '../../../hooks/redux'

const AddMentor = ({ role }) => {
  const router = useRouter()
  const mentorState = useReduxState('mentor')
  const createMentor = useReduxAdd(addMentor, 'Se creo la página correctamente')

  const handleSubmit = (data, redirect, callback) => {
    const urlRedirect = redirect ? '/administrador/mentores' : ''
    createMentor(data, urlRedirect, callback)
    router.push(urlRedirect)
  }

  return (
    <MentorForm
      {...mentorState}
      title={`Crear mentor`}
      onSubmit={handleSubmit}
    />
  )
}

export default AddMentor
