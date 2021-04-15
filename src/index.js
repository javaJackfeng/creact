import React from "react"
import ReactDOM from "react-dom"
import { Provider } from './simpleReactRedux/cReactRedux'
import store from './simpleReactRedux/store'
import "./index.css"
import App from "./App"

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)
