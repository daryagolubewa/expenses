
const dateFilter = (state = null, action) => {
switch(action.type) {
    case 'SET_FILTER':
        return action.filter
    default: return state
}
}

export default dateFilter