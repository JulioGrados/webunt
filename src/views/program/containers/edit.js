import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { ProgramForm } from '../components/form'
// import { Loader, WarningAlert } from 'components-path'
import { Loader } from '../../../components/loader'
import { WarningAlert } from '../../../components/warningAlert'
import { getProgram, editProgram, reloadState } from '../../../redux/reducers/program'
import {
  useReduxState,
  useReduxFetch,
  useReduxDispatch,
  useReduxEdit
} from '../../../hooks/redux'

const EditProgram = ({ role }) => {
  const router = useRouter()
  const programState = useReduxState('program')
  const fetchProgram = useReduxFetch(getProgram)
  const updateProgram = useReduxEdit(editProgram, 'Se edito el programa correctamente')
  const reload = useReduxDispatch(reloadState)

  useEffect(() => {
    reload()
    fetchProgram(router.query.id)
  }, [])

  const { current, error } = programState

  if (!current) {
    if (error) {
      return <WarningAlert message={error} />
    }
    return <Loader />
  }

  const handleSubmit = (data, redirect, callback) => {
    const urlRedirect = redirect
      ? '/administrador/programas' : ''
    updateProgram(current._id, data, urlRedirect, callback)
    router.push(urlRedirect)
  }

  return (
    <ProgramForm
      {...programState}
      title={`Editar programa`}
      program={current}
      onSubmit={handleSubmit}
    />
  )
}

export default EditProgram
