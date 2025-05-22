import { TeamList } from '../components/list'
import { useEffect } from 'react'

import { getTeams, deleteTeam } from '../../../redux/reducers/team'
import {
  useReduxState,
  useReduxFetch,
  useReduxRemove
} from '../../../hooks/redux'

const ListTeams = ({ role }) => {
  const teamState = useReduxState('team')
  const fetchTeams = useReduxFetch(getTeams)
  const handleDelete = useReduxRemove(
    deleteTeam,
    'El equipo se elimino correctamente'
  )

  useEffect(() => {
    if (teamState.list.length === 0) {
      fetchTeams()
    }
  }, [])

  // let teams = teamState.list.map(item => payloadToData(item))
  let teams = teamState.list
  // console.log('teamState.list', teamState.list)

  // if (role) {
  //   teams = teams.filter(user => user.roles.includes(role))
  // }

  return (
    <TeamList
      {...teamState}
      role={role}
      teams={teams}
      handleDelete={handleDelete}
    />
  )
}

export default ListTeams
