const compose = (...args) => {
    if (args.length === 0) {
        return (arg) => arg
    }
    if (args.length === 1) {
        return args[0]
    }
    return args.reduce((a, b) => (...arg) => (a(b(...arg))))
}

export default compose