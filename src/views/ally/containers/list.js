import { AllyList } from '../components/list'
import { useEffect } from 'react'

import { getAllys, deleteAlly } from '../../../redux/reducers/ally'
import {
  useReduxState,
  useReduxFetch,
  useReduxRemove
} from '../../../hooks/redux'

const ListAllys = ({ role }) => {
  const allyState = useReduxState('ally')
  const fetchAllys = useReduxFetch(getAllys)
  const handleDelete = useReduxRemove(
    deleteAlly,
    'El aliado se elimino correctamente'
  )

  useEffect(() => {
    if (allyState.list.length === 0) {
      fetchAllys()
    }
  }, [])

  // let allys = allyState.list.map(item => payloadToData(item))
  let allys = allyState.list
  // console.log('allyState.list', allyState.list)

  // if (role) {
  //   allys = allys.filter(user => user.roles.includes(role))
  // }

  return (
    <AllyList
      {...allyState}
      role={role}
      allys={allys}
      handleDelete={handleDelete}
    />
  )
}

export default ListAllys
