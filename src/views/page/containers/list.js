import { PageList } from '../components/list'
import { useEffect } from 'react'

import { getPages, deletePage } from '../../../redux/reducers/page'
import {
  useReduxState,
  useReduxFetch,
  useReduxRemove
} from '../../../hooks/redux'

const ListPages = ({ role }) => {
  const pageState = useReduxState('page')
  const fetchPages = useReduxFetch(getPages)
  const handleDelete = useReduxRemove(
    deletePage,
    'La página se elimino correctamente'
  )

  useEffect(() => {
    if (pageState.list.length === 0) {
      fetchPages()
    }
  }, [])

  // let pages = pageState.list.map(item => payloadToData(item))
  let pages = pageState.list
  // console.log('pageState.list', pageState.list)

  // if (role) {
  //   pages = pages.filter(user => user.roles.includes(role))
  // }

  return (
    <PageList
      {...pageState}
      role={role}
      pages={pages}
      handleDelete={handleDelete}
    />
  )
}

export default ListPages
