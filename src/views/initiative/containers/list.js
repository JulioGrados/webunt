import { InitiativeList } from '../components/list'
import { useEffect } from 'react'

import { getInitiatives, deleteInitiative } from '../../../redux/reducers/initiative'
import {
  useReduxState,
  useReduxFetch,
  useReduxRemove
} from '../../../hooks/redux'

const ListInitiatives = ({ role }) => {
  const initiativeState = useReduxState('initiative')
  const fetchInitiatives = useReduxFetch(getInitiatives)
  const handleDelete = useReduxRemove(
    deleteInitiative,
    'El iniciativa se elimino correctamente'
  )

  useEffect(() => {
    if (initiativeState.list.length === 0) {
      fetchInitiatives()
    }
  }, [])
  // let initiative = initiativeState.list.map(item => payloadToData(item))
  let initiatives = initiativeState.list
  // console.log('initiativeState.list', initiativeState.list)

  // if (role) {
  //   initiative = initiative.filter(user => user.roles.includes(role))
  // }

  return (
    <InitiativeList
      {...initiativeState}
      role={role}
      initiatives={initiatives}
      handleDelete={handleDelete}
    />
  )
}

export default ListInitiatives
