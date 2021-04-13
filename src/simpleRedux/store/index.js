// import { createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
// import thunk from "redux-thunk";
import logger from '../cReduxLogger'
import thunk from '../cReduxThunk'
import promise from '../cReduxPromise'
import counterReducer from '../counterReducer'
import { createStore, applyMiddleware } from '../cRedux'

// logger 只能放在最后
const store = createStore(counterReducer, applyMiddleware(thunk, promise, logger))

export default store