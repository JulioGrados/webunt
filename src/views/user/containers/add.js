import { useRouter } from 'next/router'
import { UserForm } from '../components/form'

import { addUser } from '../../../redux/reducers/user'
import { useReduxAdd, useReduxState } from '../../../hooks/redux'

const AddUser = ({ role }) => {
  const router = useRouter()
  const userState = useReduxState('user')
  const createUser = useReduxAdd(addUser, 'Se creo el usuario correctamente')

  const handleSubmit = (data, redirect, callback) => {
    const urlRedirect = redirect ? '/administrador/usuarios' : ''
    createUser(data, urlRedirect, callback)
    router.push(urlRedirect)
  }

  return (
    <UserForm
      {...userState}
      role={role}
      title={`Crear usuario`}
      onSubmit={handleSubmit}
    />
  )
}

export default AddUser
