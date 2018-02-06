function action(type, payload = {}) {
  return { type, ...payload }
}

export const INCREMENT_ASYNC = 'INCREMENT_ASYNC'
export const INCREMENT = 'INCREMENT'

export const incrementAsync = () => action(INCREMENT_ASYNC)
export const increment = () => action(INCREMENT)

export const countReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1

    default:
      return state
  }
}
