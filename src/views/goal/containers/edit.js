import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { GoalForm } from '../components/form'
// import { Loader, WarningAlert } from 'components-path'
import { Loader } from '../../../components/loader'
import { WarningAlert } from '../../../components/warningAlert'
import { getGoal, editGoal, reloadState } from '../../../redux/reducers/goal'
import {
  useReduxState,
  useReduxFetch,
  useReduxDispatch,
  useReduxEdit
} from '../../../hooks/redux'

const EditGoal = ({ role }) => {
  const router = useRouter()
  const goalState = useReduxState('goal')
  const fetchGoal = useReduxFetch(getGoal)
  const updateGoal = useReduxEdit(editGoal, 'Se edito el aliado correctamente')
  const reload = useReduxDispatch(reloadState)

  useEffect(() => {
    reload()
    fetchGoal(router.query.id)
  }, [])

  const { current, error } = goalState

  if (!current) {
    if (error) {
      return <WarningAlert message={error} />
    }
    return <Loader />
  }

  const handleSubmit = (data, redirect, callback) => {
    const urlRedirect = redirect
      ? '/administrador/metas' : ''
    updateGoal(current._id, data, urlRedirect, callback)
    router.push(urlRedirect)
  }

  return (
    <GoalForm
      {...goalState}
      title={`Editar meta`}
      goal={current}
      onSubmit={handleSubmit}
    />
  )
}

export default EditGoal
