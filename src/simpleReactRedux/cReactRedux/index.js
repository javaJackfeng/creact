import React, { useLayoutEffect, useContext, useReducer } from "react"

const Context = React.createContext()

const bindActionCreator = (creator, dispatch) => {
  return (...args) => dispatch(creator(...args))
}

const bindActionCreators = (creators, dispatch) => {
  const obj = {}
  for (let key in creators) {
    obj[key] = bindActionCreator(creators[key], dispatch)
  }
  return obj
}

export const connect = (
  mapStateToProps = (state) => state,
  mapDispatchToProps
) => (WrapperComponent) => (props) => {
  const store = useContext(Context)
  const { dispatch, getState, subscribe } = store || {}
  const stateProps = mapStateToProps(getState())
  let dispatchProps = { dispatch }
  const [, forceUpdate] = useReducer((x) => x + 1, 0)
  if (typeof mapDispatchToProps === "function") {
    dispatchProps = mapDispatchToProps(dispatch)
  } else if (typeof mapDispatchToProps === "object") {
    dispatchProps = bindActionCreators(mapDispatchToProps, dispatch)
  }
  useLayoutEffect(() => {
    const unsubscribe = subscribe(() => {
      forceUpdate()
    })
    return () => {
      unsubscribe && unsubscribe()
    }
  }, [store, subscribe])
  return <WrapperComponent {...props} {...stateProps} {...dispatchProps} />
}

export function Provider({ store, children }) {
  return <Context.Provider value={store}>{children}</Context.Provider>
}

export const useStore = () => {
    const store = useContext(Context)
    return store
}

export const useDispatch = () => {
    const store = useStore()
    return store.dispatch
}

export const useSelector = (selector) => {
    const store = useStore()
    const { getState, subscribe } = store || {}
    const [, forceUpdate] = useReducer((x) => x + 1, 0)
    useLayoutEffect(() => {
      const unsubscribe = subscribe(() => {
        forceUpdate()
      })
      return () => {
        unsubscribe && unsubscribe()
      }
    }, [store, subscribe])
    const selectedState = selector(getState())
    return selectedState
}
