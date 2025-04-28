import { ProgramList } from '../components/list'
import { useEffect } from 'react'

import { getPrograms, deleteProgram } from '../../../redux/reducers/program'
import {
  useReduxState,
  useReduxFetch,
  useReduxRemove
} from '../../../hooks/redux'

const ListPrograms = ({ role }) => {
  const programState = useReduxState('program')
  const fetchPrograms = useReduxFetch(getPrograms)
  const handleDelete = useReduxRemove(
    deleteProgram,
    'El aliado se elimino correctamente'
  )

  useEffect(() => {
    if (programState.list.length === 0) {
      fetchPrograms()
    }
  }, [])

  // let programs = programState.list.map(item => payloadToData(item))
  let programs = programState.list
  // console.log('programState.list', programState.list)

  // if (role) {
  //   programs = programs.filter(user => user.roles.includes(role))
  // }

  return (
    <ProgramList
      {...programState}
      role={role}
      programs={programs}
      handleDelete={handleDelete}
    />
  )
}

export default ListPrograms
