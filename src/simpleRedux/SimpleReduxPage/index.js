import React from "react"
import store from "../store"

class ReduxPage extends React.Component {
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate()
    })
  }
  add = () => {
    store.dispatch({ type: "ADD" })
  }
  asyAdd = () => {
    // redux 默认只支持同步
    // 不加入thunk
    // setTimeout(() => {
    //   store.dispatch({ type: "ADD", payload: 1 })
    // }, 1000)
    // 加入thunk
    store.dispatch((dispatch, getState) => {
      setTimeout(() => {
        dispatch({ type: "ADD", payload: 1 })
      }, 1000)
    })
  }
  minus = () => {
    store.dispatch({ type: "MINUS" })
  }
  promiseMinus = () => {
    store.dispatch(
      Promise.resolve({
        type: "MINUS",
        payload: 1,
      })
    )
  }
  render() {
    return (
      <div>
        <h3>ReduxPage</h3> <p>{store.getState()}</p>{" "}
        <button onClick={this.add}>add</button>{" "}
        <button onClick={this.asyAdd}>asyAdd</button>{" "}
        <button onClick={this.minus}>minus</button>
        <button onClick={this.promiseMinus}>promiseMinus</button>
      </div>
    )
  }
}

export default ReduxPage
