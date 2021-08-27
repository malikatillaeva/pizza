const initialState = {
    items: [],
    totalPrice: 0,
    totalCount: 0
}

const cart = (state = initialState, action ) => {
    switch(action.type) {
        case 'ADD_PIZZA_TO_CART':
            let newItems;
            let check = true

            newItems = [
                ...state.items
            ]
            newItems.forEach((item) =>{
                if(item.id === action.payload.id && item.type === action.payload.type && item.size === action.payload.size){
                    item.alikeCount++
                    item.alikePrice += action.payload.price
                    check = false
                }
            })
            if(check) {
                newItems.push(action.payload)
            }
            return {
                ...state,
                items: newItems,
                
                totalPrice: state.totalPrice + action.payload.price,
                totalCount: state.totalCount + 1
            }

        case 'CLEAR_CART':
            return initialState

        case 'CLEAR_ALIKE':
            const alikePizzas = [
                ...state.items
            ]
            const newTotalPrice = state.totalPrice - alikePizzas[action.payload].alikePrice
            const newTotalCount = state.totalCount - alikePizzas[action.payload].alikeCount
            alikePizzas.splice(action.payload, 1)

            return {
                ...state,
                items: alikePizzas,
                totalPrice: newTotalPrice,
                totalCount: newTotalCount,
            }

        case 'MINUS_PIZZA':
            if(state.items[action.payload].alikeCount <= 1) return state
            let minusedItems = [
                ...state.items
            ]
            minusedItems.forEach((item, index) => {
                if(index === action.payload) {
                    minusedItems[index].alikeCount--
                    minusedItems[index].alikePrice -= minusedItems[index].price
                }
            })
            return {
                ...state,
                items: minusedItems, 
                totalPrice: state.totalPrice - minusedItems[action.payload].price,
                totalCount: state.totalCount - 1
            }
             
        case 'PLUS_PIZZA':
            if(state.items[action.payload].alikeCount >= 20) return state
            let plusedItems = [
                    ...state.items
            ]
            plusedItems.forEach((item, index) => {
                if(index === action.payload) {
                    plusedItems[index].alikeCount++
                    plusedItems[index].alikePrice += plusedItems[index].price
                }
            })
            return {
                ...state,
                items: plusedItems,
                totalPrice: state.totalPrice + plusedItems[action.payload].price,
                totalCount: state.totalCount + 1
            }

        default:
            return state
    }
}

export default cart