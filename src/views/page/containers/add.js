import { useRouter } from 'next/router'
import { PageForm } from '../components/form'
import { addPage } from '../../../redux/reducers/page'
import { useReduxAdd, useReduxState } from '../../../hooks/redux'

const AddPage = ({ role }) => {
  const router = useRouter()
  const userState = useReduxState('page')
  const createPage = useReduxAdd(addPage, 'Se creo la página correctamente')

  const handleSubmit = (data, redirect, callback) => {
    const urlRedirect = redirect ? '/administrador/paginas' : ''
    createPage(data, urlRedirect, callback)
    router.push(urlRedirect)
  }

  return (
    <PageForm
      {...userState}
      title={`Crear página`}
      onSubmit={handleSubmit}
    />
  )
}

export default AddPage
