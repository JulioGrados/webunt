import { MentorList } from '../components/list'
import { useEffect } from 'react'

import { getMentors, deleteMentor } from '../../../redux/reducers/mentor'
import {
  useReduxState,
  useReduxFetch,
  useReduxRemove
} from '../../../hooks/redux'

const ListMentors = ({ role }) => {
  const mentorState = useReduxState('mentor')
  const fetchMentors = useReduxFetch(getMentors)
  const handleDelete = useReduxRemove(
    deleteMentor,
    'El mentor se elimino correctamente'
  )

  useEffect(() => {
    if (mentorState.list.length === 0) {
      fetchMentors()
    }
  }, [])

  // let mentors = mentorState.list.map(item => payloadToData(item))
  let mentors = mentorState.list
  // console.log('mentorState.list', mentorState.list)

  // if (role) {
  //   mentors = mentors.filter(user => user.roles.includes(role))
  // }

  return (
    <MentorList
      {...mentorState}
      role={role}
      mentors={mentors}
      handleDelete={handleDelete}
    />
  )
}

export default ListMentors
