import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { MentorForm } from '../components/form'
// import { Loader, WarningAlert } from 'components-path'
import { Loader } from '../../../components/loader'
import { WarningAlert } from '../../../components/warningAlert'
import { getMentor, editMentor, reloadState } from '../../../redux/reducers/mentor'
import {
  useReduxState,
  useReduxFetch,
  useReduxDispatch,
  useReduxEdit
} from '../../../hooks/redux'

const EditMentor = ({ role }) => {
  const router = useRouter()
  const mentorState = useReduxState('mentor')
  const fetchMentor = useReduxFetch(getMentor)
  const updateMentor = useReduxEdit(editMentor, 'Se edito el aliado correctamente')
  const reload = useReduxDispatch(reloadState)

  useEffect(() => {
    reload()
    fetchMentor(router.query.id)
  }, [])

  const { current, error } = mentorState

  if (!current) {
    if (error) {
      return <WarningAlert message={error} />
    }
    return <Loader />
  }

  const handleSubmit = (data, redirect, callback) => {
    const urlRedirect = redirect
      ? '/administrador/mentores' : ''
    updateMentor(current._id, data, urlRedirect, callback)
    router.push(urlRedirect)
  }

  return (
    <MentorForm
      {...mentorState}
      title={`Editar mentor`}
      mentor={current}
      onSubmit={handleSubmit}
    />
  )
}

export default EditMentor
