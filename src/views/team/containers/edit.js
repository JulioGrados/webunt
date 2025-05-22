import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { TeamForm } from '../components/form'
// import { Loader, WarningAlert } from 'components-path'
import { Loader } from '../../../components/loader'
import { WarningAlert } from '../../../components/warningAlert'
import { getTeam, editTeam, reloadState } from '../../../redux/reducers/team'
import {
  useReduxState,
  useReduxFetch,
  useReduxDispatch,
  useReduxEdit
} from '../../../hooks/redux'

const EditTeam = ({ role }) => {
  const router = useRouter()
  const teamState = useReduxState('team')
  const fetchTeam = useReduxFetch(getTeam)
  const updateTeam = useReduxEdit(editTeam, 'Se edito el equipo correctamente')
  const reload = useReduxDispatch(reloadState)

  useEffect(() => {
    reload()
    fetchTeam(router.query.id)
  }, [])

  const { current, error } = teamState

  if (!current) {
    if (error) {
      return <WarningAlert message={error} />
    }
    return <Loader />
  }

  const handleSubmit = (data, redirect, callback) => {
    const urlRedirect = redirect
      ? '/administrador/equipo' : ''
    updateTeam(current._id, data, urlRedirect, callback)
    router.push(urlRedirect)
  }

  return (
    <TeamForm
      {...teamState}
      title={`Editar equipo`}
      team={current}
      onSubmit={handleSubmit}
    />
  )
}

export default EditTeam
