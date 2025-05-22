import { useRouter } from 'next/router'
import { TeamForm } from '../components/form'
import { addTeam } from '../../../redux/reducers/team'
import { useReduxAdd, useReduxState } from '../../../hooks/redux'

const AddTeam = ({ role }) => {
  const router = useRouter()
  const teamState = useReduxState('team')
  const createTeam = useReduxAdd(addTeam, 'Se creo el team correctamente')

  const handleSubmit = (data, redirect, callback) => {
    const urlRedirect = redirect ? '/administrador/equipo' : ''
    createTeam(data, urlRedirect, callback)
    router.push(urlRedirect)
  }

  return (
    <TeamForm
      {...teamState}
      title={`Crear equipo`}
      onSubmit={handleSubmit}
    />
  )
}

export default AddTeam
