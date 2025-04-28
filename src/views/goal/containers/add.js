import { useRouter } from 'next/router'
import { GoalForm } from '../components/form'
import { addGoal } from '../../../redux/reducers/goal'
import { useReduxAdd, useReduxState } from '../../../hooks/redux'

const AddGoal = ({ role }) => {
  const router = useRouter()
  const goalState = useReduxState('goal')
  const createGoal = useReduxAdd(addGoal, 'Se creo la meta correctamente')

  const handleSubmit = (data, redirect, callback) => {
    const urlRedirect = redirect ? '/administrador/metas' : ''
    createGoal(data, urlRedirect, callback)
    router.push(urlRedirect)
  }

  return (
    <GoalForm
      {...goalState}
      title={`Crear aliado`}
      onSubmit={handleSubmit}
    />
  )
}

export default AddGoal
