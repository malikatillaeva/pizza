import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Categories, PizzaBlock, Sort } from '../components'
import { fetchPizzas } from "../redux/actions/pizzas"
import { setCategory, setSort } from "../redux/actions/filters"

function Main() {
  const dispatch = useDispatch()

  const fetchedPizzas = useSelector(({pizzas}) => pizzas.pizzas)
  const { category, sort } = useSelector(({filters}) => filters)
  const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
  
  const onClickItem = (index) => {
    dispatch(setCategory(index))
  }

  const sortItems = [
    { name: 'популярности', type: 'rating', order: 'desc' },
    { name: 'по цене', type: 'price', order: 'desc' },
    { name: 'по алфавиту', type: 'name', order: 'asc' },
]


const onSelectSort = (sortObj) => {
  const {type, order} = sortObj
  dispatch(setSort({type, order}))
}


  React.useEffect(() => {

    dispatch(fetchPizzas(category, sort))
  }, [category, sort, dispatch])

  return (
      <div className="container">
        <div className="content__top content__top-home">
          <Categories 
            categories={categories}
            activeCategory={category}
            onClickItem={onClickItem}
          />
          <Sort 
          sortItems={sortItems}
          sort={sort.type}
          onSelectSort={onSelectSort}
          />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
        {
          fetchedPizzas.map(pizza => <PizzaBlock key={pizza.id} {...pizza}/>)
        }
        </div>
      </div>
  );
}

export default Main