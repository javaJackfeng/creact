import ActionTypes from './actionTypes'
const createStore = (reducer) => {

    let currentReducer = reducer
    let currentState
    let currentListeners = []
    let nextListeners = currentListeners

    const getState = () => {
        return currentState
    }

    const dispatch = (action) => {
        currentState = currentReducer(currentState, action)
        currentListeners = nextListeners
        currentListeners.forEach(listener => listener());
        return action
    }

    function ensureCanMutateNextListeners() {
        if (nextListeners === currentListeners) {
          nextListeners = currentListeners.slice()
        }
      }

    const subscribe = (listener) => {
        nextListeners.push(listener)
        ensureCanMutateNextListeners()
        return function unsubscribe() {
            ensureCanMutateNextListeners()
            const index = nextListeners.indexOf(listener)
            nextListeners.splice(index, 1)
            currentListeners = null
        }
    }

    const store = {
        getState,
        dispatch,
        subscribe
    }

    dispatch({ type: ActionTypes.INIT })

    return store
}

export default createStore