import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { AllyForm } from '../components/form'
// import { Loader, WarningAlert } from 'components-path'
import { Loader } from '../../../components/loader'
import { WarningAlert } from '../../../components/warningAlert'
import { getAlly, editAlly, reloadState } from '../../../redux/reducers/ally'
import {
  useReduxState,
  useReduxFetch,
  useReduxDispatch,
  useReduxEdit
} from '../../../hooks/redux'

const EditAlly = ({ role }) => {
  const router = useRouter()
  const allyState = useReduxState('ally')
  const fetchAlly = useReduxFetch(getAlly)
  const updateAlly = useReduxEdit(editAlly, 'Se edito el aliado correctamente')
  const reload = useReduxDispatch(reloadState)

  useEffect(() => {
    reload()
    fetchAlly(router.query.id)
  }, [])

  const { current, error } = allyState

  if (!current) {
    if (error) {
      return <WarningAlert message={error} />
    }
    return <Loader />
  }

  const handleSubmit = (data, redirect, callback) => {
    const urlRedirect = redirect
      ? '/administrador/aliados' : ''
    updateAlly(current._id, data, urlRedirect, callback)
    router.push(urlRedirect)
  }

  return (
    <AllyForm
      {...allyState}
      title={`Editar aliado`}
      ally={current}
      onSubmit={handleSubmit}
    />
  )
}

export default EditAlly
