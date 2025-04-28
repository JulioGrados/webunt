import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { QuestionForm } from '../components/form'
// import { Loader, WarningAlert } from 'components-path'
import { Loader } from '../../../components/loader'
import { WarningAlert } from '../../../components/warningAlert'
import { getQuestion, editQuestion, reloadState } from '../../../redux/reducers/question'
import {
  useReduxState,
  useReduxFetch,
  useReduxDispatch,
  useReduxEdit
} from '../../../hooks/redux'

const EdiQuestion = ({ role }) => {
  const router = useRouter()
  const questionState = useReduxState('question')
  const fetchQuestion = useReduxFetch(getQuestion)
  const updateQuestion = useReduxEdit(editQuestion, 'Se edito el cuestionario correctamente')
  const reload = useReduxDispatch(reloadState)

  useEffect(() => {
    reload()
    fetchQuestion(router.query.id)
  }, [])

  const { current, error } = questionState

  if (!current) {
    if (error) {
      return <WarningAlert message={error} />
    }
    return <Loader />
  }

  const handleSubmit = (data, redirect, callback) => {
    const urlRedirect = redirect
      ? '/administrador/cuestionario' : ''
    updateQuestion(current._id, data, urlRedirect, callback)
    router.push(urlRedirect)
  }

  return (
    <QuestionForm
      {...questionState}
      title={`Editar cuestionario`}
      question={current}
      onSubmit={handleSubmit}
    />
  )
}

export default EdiQuestion
