import { UserList } from '../components/list'
import { payloadToData } from 'utils/functions/user'
import { useEffect } from 'react'

import { getUsers, deleteUser } from '../../../redux/reducers/user'
import {
  useReduxState,
  useReduxFetch,
  useReduxRemove
} from '../../../hooks/redux'

const ListUsers = ({ role }) => {
  const userState = useReduxState('user')
  const fetchUsers = useReduxFetch(getUsers)
  const handleDelete = useReduxRemove(
    deleteUser,
    'El usuario se elimino correctamente'
  )

  useEffect(() => {
    if (userState.list.length === 0) {
      fetchUsers()
    }
  }, [])

  // let users = userState.list.map(item => payloadToData(item))
  let users = userState.list
  // console.log('userState.list', userState.list)

  if (role) {
    users = users.filter(user => user.roles.includes(role))
  }

  return (
    <UserList
      {...userState}
      role={role}
      users={users}
      handleDelete={handleDelete}
    />
  )
}

export default ListUsers
