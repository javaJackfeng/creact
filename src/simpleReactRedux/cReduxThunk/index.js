// thunk 增加action 能力, 查看simpleReduxpage中asyAdd方法

const thunk = ({ dispatch, getState }) => {
    return (next) => (action) => {
        if ( typeof action === 'function') {
            return action(dispatch, getState);
        }
        return next(action)
    }
}

export default thunk