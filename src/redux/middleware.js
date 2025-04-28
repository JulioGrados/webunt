const actionMiddleware = ({ dispatch, getState }) => next => async action => {
  if (typeof action === 'function') {
    return action(dispatch, getState)
  }

  const { promise, types, ...rest } = action
  if (!promise) {
    next(action)
    return { success: true }
  }

  const [REQUEST, SUCCESS, FAILURE] = types
  next({ ...rest, type: REQUEST })

  try {
    const query = await promise()
    let success = false
    if (Array.isArray(query)) {
      success = true
    } else {
      success = query.success
    }

    if (success) {
      next({ ...rest, payload: query, type: SUCCESS })
    } else {
      next({
        ...rest,
        payload: query.message || 'Error del servidor',
        type: FAILURE
      })
    }

    return query
  } catch (error) {
    return {
      success: false,
      message: 'Error en el servidor.',
      error
    }
  }
}

export default actionMiddleware
