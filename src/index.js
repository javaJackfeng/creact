import React from "react"
import ReactDOM from "react-dom"
import compose from './simpleRedux/compose'
import "./index.css"
import App from "./App"

ReactDOM.render(<App />, document.getElementById("root"))

function f1(arg) {
  console.log("f1", arg)
  return arg
}
function f2(arg) {
  console.log("f2", arg)
  return arg
}
function f3(arg) {
  console.log("f3", arg)
  return arg
}

compose(f1, f2, f3)('args')
