import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { WelcomeForm } from '../components/form'
// import { Loader, WarningAlert } from 'components-path'
import { Loader } from '../../../components/loader'
import { WarningAlert } from '../../../components/warningAlert'
import { getWelcome, editWelcome, reloadState } from '../../../redux/reducers/welcome'
import {
  useReduxState,
  useReduxFetch,
  useReduxDispatch,
  useReduxEdit
} from '../../../hooks/redux'

const EditWelcome = ({ role }) => {
  const router = useRouter()
  const welcomeState = useReduxState('welcome')
  const fetchWelcome = useReduxFetch(getWelcome)
  const updateWelcome = useReduxEdit(editWelcome, 'Se edito la bienvenida correctamente')
  const reload = useReduxDispatch(reloadState)

  useEffect(() => {
    reload()
    fetchWelcome(router.query.id)
  }, [])

  const { current, error } = welcomeState

  if (!current) {
    if (error) {
      return <WarningAlert message={error} />
    }
    return <Loader />
  }

  const handleSubmit = (data, redirect, callback) => {
    const urlRedirect = redirect
      ? '/administrador/bienvenida' : ''
    updateWelcome(current._id, data, urlRedirect, callback)
    router.push(urlRedirect)
  }

  return (
    <WelcomeForm
      {...welcomeState}
      title={`Editar bienvenida`}
      welcome={current}
      onSubmit={handleSubmit}
    />
  )
}

export default EditWelcome
