import { combineReducers } from 'redux'
import pizzas from './pizzas'
import filters  from "./filters";
import cart  from "./cart";

export const rootReducer = combineReducers({
    pizzas,
    filters, 
    cart
})
