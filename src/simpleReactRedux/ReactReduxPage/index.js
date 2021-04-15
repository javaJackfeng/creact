import React, { Component } from "react"
// import { connect } from "react-redux"
import { connect, useSelector, useDispatch } from "../cReactRedux"
function ReactReduxHookPage() {
  const dispatch = useDispatch()
  const add = () => {
    dispatch({ type: "ADD" })
  }
  const count = useSelector(({ count }) => count)
  return (
    <div>
      {" "}
      <h3>ReactReduxHookPage</h3> <p>{count}</p>{" "}
      <button onClick={add}>add</button>{" "}
    </div>
  )
}
class ReactReduxPage extends Component {
  render() {
    const { num, add, minus } = this.props
    return (
      <div>
        <h1>ReactReduxPage</h1> <p>{num}</p>
        <button onClick={add}>add</button>{" "}
        <button onClick={minus}>minus</button>{" "}
        <ReactReduxHookPage />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return { num: state }
}
const mapDispatchToProps = {
  add: () => {
    return { type: "ADD" }
  },
  minus: () => {
    return { type: "MINUS" }
  },
}
export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxPage)
