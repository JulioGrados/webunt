import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { InitiativeForm } from '../components/form'
// import { Loader, WarningAlert } from 'components-path'
import { Loader } from '../../../components/loader'
import { WarningAlert } from '../../../components/warningAlert'
import { getInitiative, editInitiative, reloadState } from '../../../redux/reducers/initiative'
import {
  useReduxState,
  useReduxFetch,
  useReduxDispatch,
  useReduxEdit
} from '../../../hooks/redux'

const EditInitiative = ({ role }) => {
  const router = useRouter()
  const initiativeState = useReduxState('initiative')
  const fetchInitiative = useReduxFetch(getInitiative)
  const updateInitiative = useReduxEdit(editInitiative, 'Se edito el aliado correctamente')
  const reload = useReduxDispatch(reloadState)

  useEffect(() => {
    reload()
    fetchInitiative(router.query.id)
  }, [])

  const { current, error } = initiativeState

  if (!current) {
    if (error) {
      return <WarningAlert message={error} />
    }
    return <Loader />
  }

  const handleSubmit = (data, redirect, callback) => {
    const urlRedirect = redirect
      ? '/administrador/iniciativas' : ''
    updateInitiative(current._id, data, urlRedirect, callback)
    router.push(urlRedirect)
  }

  return (
    <InitiativeForm
      {...initiativeState}
      title={`Editar iniciativa`}
      initiative={current}
      onSubmit={handleSubmit}
    />
  )
}

export default EditInitiative
