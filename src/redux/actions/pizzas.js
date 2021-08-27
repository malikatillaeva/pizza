export const fetchPizzas = (category, sort) => (dispatch) => {
    console.log(category);
    fetch(`${process.env.REACT_APP_API}/pizzas?${category === null ? '' : `category=${category}`}&_sort=${sort.type}&_order=${sort.order}`)
      .then(res => res.json())
      .then(res => dispatch(setPizzas(res)))
      
}

export const setPizzas = (pizzas) => ({
    type: 'SET_PIZZAS',
    payload: pizzas
})
