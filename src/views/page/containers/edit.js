import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { PageForm } from '../components/form'
// import { Loader, WarningAlert } from 'components-path'
import { Loader } from '../../../components/loader'
import { WarningAlert } from '../../../components/warningAlert'
import { getPage, editPage, reloadState } from '../../../redux/reducers/page'
import {
  useReduxState,
  useReduxFetch,
  useReduxDispatch,
  useReduxEdit
} from '../../../hooks/redux'

const EditPage = ({ role }) => {
  const router = useRouter()
  const pageState = useReduxState('page')
  const fetchPage = useReduxFetch(getPage)
  const updatePage = useReduxEdit(editPage, 'Se edito el usuario correctamente')
  const reload = useReduxDispatch(reloadState)

  useEffect(() => {
    reload()
    fetchPage(router.query.id)
  }, [])

  const { current, error } = pageState

  if (!current) {
    if (error) {
      return <WarningAlert message={error} />
    }
    return <Loader />
  }

  const handleSubmit = (data, redirect, callback) => {
    const urlRedirect = redirect
      ? '/administrador/paginas' : ''
    updatePage(current._id, data, urlRedirect, callback)
    router.push(urlRedirect)
  }

  return (
    <PageForm
      {...pageState}
      title={`Editar página`}
      page={current}
      onSubmit={handleSubmit}
    />
  )
}

export default EditPage
