import React from "react"
import store from '../store'

class ReduxPage extends React.Component {
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate()
    })
  }
  add = () => {
    store.dispatch({ type: "ADD" })
  }
  minus = () => {
    store.dispatch({ type: "MINUS" })
  }
  render() {
    return (
      <div>
        <h3>ReduxPage</h3> <p>{store.getState()}</p>{" "}
        <button onClick={this.add}>add</button>{" "}
        <button onClick={this.minus}>minus</button>
      </div>
    )
  }
}

export default ReduxPage
