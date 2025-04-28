import { WelcomeList } from '../components/list'
import { useEffect } from 'react'

import { getWelcomes, deleteWelcome } from '../../../redux/reducers/welcome'
import {
  useReduxState,
  useReduxFetch,
  useReduxRemove
} from '../../../hooks/redux'

const ListWelcomes = ({ role }) => {
  const welcomeState = useReduxState('welcome')
  const fetchWelcomes = useReduxFetch(getWelcomes)
  const handleDelete = useReduxRemove(
    deleteWelcome,
    'La bienvenida se elimino correctamente'
  )

  useEffect(() => {
    if (welcomeState.list.length === 0) {
        const params = {
            populate: ['user']
        }
      fetchWelcomes(params)
    }
  }, [])

  // let welcomes = welcomeState.list.map(item => payloadToData(item))
  let welcomes = welcomeState.list
  // console.log('welcomeState.list', welcomeState.list)

  // if (role) {
  //   welcomes = welcomes.filter(user => user.roles.includes(role))
  // }
//   console.log('welcomes', welcomes)
  return (
    <WelcomeList
      {...welcomeState}
      role={role}
      welcomes={welcomes}
      handleDelete={handleDelete}
    />
  )
}

export default ListWelcomes
