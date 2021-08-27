export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_TO_CART',
    payload: pizzaObj
})

export const clearCart = () => ({
    type: 'CLEAR_CART'
})

export const clearAlike = (index) => ({
    type: 'CLEAR_ALIKE',
    payload: index
})

export const plusPizza = (index) => ({
    type: 'PLUS_PIZZA',
    payload: index
})

export const minusPizza = (index) => ({
    type: 'MINUS_PIZZA',
    payload: index
})