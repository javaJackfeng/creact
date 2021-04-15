import compose from '../compose'

// applyMiddleware 作为createStore 第二参数(enhancer)传入， 返回增强的store
// 例子用法： applyMiddleware(thunk, logger)
// 在createStore中enhancer 写法：
// if (enhancer && typeof enhancer === 'function') {
//     return enhancer(createStore)(reducer);
// }
const applyMiddleware = (...middlewares) => {
  return (createStore) => (reducer) => {
    const store = createStore(reducer)
    let dispatch = store.dispatch
    const midApi = {
      getState: store.getState,
      dispatch: (action, ...args) => dispatch(action, ...args),
    }
    const middlewareChain = middlewares.map((middleware) => middleware(midApi))
    dispatch = compose(...middlewareChain)(store.dispatch)
    return {
      ...store,
      dispatch,
    }
  }
}

export default applyMiddleware
