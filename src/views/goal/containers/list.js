import { GoalList } from '../components/list'
import { useEffect } from 'react'

import { getGoals, deleteGoal } from '../../../redux/reducers/goal'
import {
  useReduxState,
  useReduxFetch,
  useReduxRemove
} from '../../../hooks/redux'

const ListGoals = ({ role }) => {
  const goalState = useReduxState('goal')
  const fetchGoals = useReduxFetch(getGoals)
  const handleDelete = useReduxRemove(
    deleteGoal,
    'La meta se elimino correctamente'
  )

  useEffect(() => {
    if (goalState.list.length === 0) {
      fetchGoals()
    }
  }, [])

  // let goals = goalState.list.map(item => payloadToData(item))
  let goals = goalState.list
  // console.log('goalState.list', goalState.list)

  // if (role) {
  //   goals = goals.filter(user => user.roles.includes(role))
  // }

  return (
    <GoalList
      {...goalState}
      role={role}
      goals={goals}
      handleDelete={handleDelete}
    />
  )
}

export default ListGoals
