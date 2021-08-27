function pizzas(state = { pizzas: [] }, action) {
    switch (action.type) {
        case 'SET_PIZZAS':
            return {
                pizzas: action.payload
            }
        
        default:
            return state
    }
}

export default pizzas