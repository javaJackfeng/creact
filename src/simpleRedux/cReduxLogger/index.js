// logger 做为最后一个中间件
// 接受一个对象，包含 getState，dispatch
// 返回一个函数
// 在applyMiddleware 中， compose 接受中间件执行后返回函数作为参数数组，例如接受logger() 后的结果作为参数, 返回一个函数
// 返回的函数以dispatch作为参数，返回增强的dispatch

// 在logger例子中， return 的函数在middlewares.map已返回， 作为middlewareChain数组中一个
// next 相当于 上一个reduce传下来的参数，即store.dispatch
// next 执行后 返回的函数就是一个dispatch， 接受action为参数

const logger = ({ getState }) => {
    return (next) => (action) => {
        const now = new Date()
        const h = now.getHours()
        const m = now.getMinutes()
        const s = now.getSeconds()
        console.log("====================================");
        console.log(`action  ${action.type} @ ${h}:${m}:${s}`)
        const prevState = getState()
        console.log("prev state", prevState)
        const returnValue = next(action);
        const nextState = getState();
        console.log("next state", nextState);
        console.log("====================================");
        return returnValue;
    }
}

export default logger