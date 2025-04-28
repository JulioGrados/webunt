import { QuestionList } from '../components/list'
import { useEffect } from 'react'

import { getQuestions, deleteQuestion } from '../../../redux/reducers/question'
import {
  useReduxState,
  useReduxFetch,
  useReduxRemove
} from '../../../hooks/redux'

const ListQuestions = ({ role }) => {
  const questionState = useReduxState('question')
  const fetchQuestions = useReduxFetch(getQuestions)
  const handleDelete = useReduxRemove(
    deleteQuestion,
    'La bienvenida se elimino correctamente'
  )

  useEffect(() => {
    if (questionState.list.length === 0) {
        const params = {
            populate: ['user']
        }
      fetchQuestions(params)
    }
  }, [])

  // let questions = questionState.list.map(item => payloadToData(item))
  let questions = questionState.list
  // console.log('questionState.list', questionState.list)

  // if (role) {
  //   questions = questions.filter(user => user.roles.includes(role))
  // }
  console.log('questions', questions)
  return (
    <QuestionList
      {...questionState}
      role={role}
      questions={questions}
      handleDelete={handleDelete}
    />
  )
}

export default ListQuestions
