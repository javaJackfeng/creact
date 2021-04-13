import isPromise from 'is-promise'

const promise = ({ dispatch }) => {
  return (next) => (action) => {
    return isPromise(action) ? action.then(dispatch) : next(action)
  }
}

export default promise
