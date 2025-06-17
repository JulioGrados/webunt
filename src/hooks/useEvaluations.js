import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  editEvaluation,
  addEvaluation,
  deleteEvaluation,
  reloadState,
  getOpenEvaluations,
  getEvaluations
} from '../redux/reducers/evaluation'

export const useEvaluations = ({user, result = false}) => {
  const { list, loading, error, current, loaded } = useSelector(
    state => state.evaluation
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (list.length === 0 && loading === false && user) {
      dispatch(getEvaluations({
        query: { user: user },
        populate: ['user', 'parent']
      }))
    }
  }, [])

  useEffect(() => {
    if (user && result) {
      console.log('entro de nuevo')
      dispatch(getEvaluations({
        query: { user: user },
        populate: ['user', 'parent']
      }))
    }
  }, [user])

  const update = async (id, data) => {
    return dispatch(editEvaluation(id, data))
  }

  const create = async data => {
    return dispatch(addEvaluation(data))
  }

  const remove = async id => {
    return dispatch(deleteEvaluation(id))
  }

  const reload = async () => {
    return dispatch(reloadState())
  }

  return {
    list,
    loading,
    update,
    create,
    error,
    current,
    remove,
    loaded,
    reload
  }
}
