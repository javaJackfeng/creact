// 接受一个函数数组， 执行后返回一个函数
// 返回的函数接受参数，该参数依次作为compose参数中每个函数的参数执行
const compose = (...args) => {
  if (args.length === 0) {
    return (arg) => arg
  }
  if (args.length === 1) {
    return args[0]
  }
  return args.reduce((a, b) => (...arg) => a(b(...arg)))
}

export default compose

// function f1(arg) {
//   console.log("f1", arg)
//   return arg
// }
// function f2(arg) {
//   console.log("f2", arg)
//   return arg
// }
// function f3(arg) {
//   console.log("f3", arg)
//   return arg
// }

// console.log(compose(f1, f2, f3)("omg"));
