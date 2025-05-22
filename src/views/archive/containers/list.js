import { ArchivesList } from '../components/list'
import { useEffect } from 'react'

import { getUploads, deleteUpload } from '../../../redux/reducers/upload'
import {
  useReduxState,
  useReduxFetch,
  useReduxRemove
} from '../../../hooks/redux'

const ListArchives = ({ role }) => {
  const archivesState = useReduxState('upload')
  const fetchArchives = useReduxFetch(getUploads)
  const handleDelete = useReduxRemove(
    deleteUpload,
    'El archivo se elimino correctamente'
  )

  useEffect(() => {
    if (archivesState.list.length === 0) {
        const params = {
            populate: ['linked']
        }
        fetchArchives(params)
    }
  }, [])

  // let archives = archivesState.list.map(item => payloadToData(item))
  let archives = archivesState.list
  // console.log('archivesState.list', archivesState.list)

  // if (role) {
  //   archives = archives.filter(user => user.roles.includes(role))
  // }

  return (
    <ArchivesList
      {...archivesState}
      role={role}
      archives={archives}
      handleDelete={handleDelete}
    />
  )
}

export default ListArchives
