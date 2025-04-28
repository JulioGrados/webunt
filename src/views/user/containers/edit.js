import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { UserForm } from '../components/form'
// import { Loader, WarningAlert } from 'components-path'
import { Loader } from '../../../components/loader'
import { WarningAlert } from '../../../components/warningAlert'
import { getUser, editUser, reloadState } from '../../../redux/reducers/user'
import {
  useReduxState,
  useReduxFetch,
  useReduxDispatch,
  useReduxEdit
} from '../../../hooks/redux'

const EditUser = ({ role }) => {
  const router = useRouter()
  const userState = useReduxState('user')
  const fetchUser = useReduxFetch(getUser)
  const updateUser = useReduxEdit(editUser, 'Se edito el usuario correctamente')
  const reload = useReduxDispatch(reloadState)

  useEffect(() => {
    reload()
    fetchUser(router.query.id)
  }, [])

  const { current, error } = userState

  if (!current) {
    if (error) {
      return <WarningAlert message={error} />
    }
    return <Loader />
  }

  const handleSubmit = (data, redirect, callback) => {
    const urlRedirect = redirect ? '/administrador/usuarios' : ''

    updateUser(current._id, data, urlRedirect, callback)
    router.push(urlRedirect)
  }

  return (
    <UserForm
      {...userState}
      role={role}
      title={`Editar ${role || 'usuario'}`}
      user={current}
      onSubmit={handleSubmit}
    />
  )
}

export default EditUser
