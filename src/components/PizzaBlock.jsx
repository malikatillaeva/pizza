import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { addPizzaToCart } from '../redux/actions/cart'

const PizzaBlock = ({id, imageUrl, name, price, sizes, types}) => {
  const dispatch = useDispatch()

  const availableTypes = ['тонкое', 'традиционное']
  const [activeType, setActiveType] = React.useState(types[0])

  const availableSize = [26, 30, 40]
  const [activeSize, setActiveSize] = React.useState(sizes[0])

  const [activePrice, setActivePrice] = React.useState(price[availableSize.indexOf(activeSize)])
  

  const onSelectSize = index => {
    setActiveSize(availableSize[index])
    setActivePrice(price[index])
  }

  const pushPizzaToCart = () => {
    const pizza = {
      id,
      name,
      price: activePrice,
      img: imageUrl,
      type: availableTypes[activeType],
      size: activeSize,
      alikeCount: 1,
      alikePrice: activePrice
    }
    dispatch(addPizzaToCart(pizza))
  }

  return (
      <div className="pizza-block">
        <img className="pizza-block__image"
          src={imageUrl}
          alt="0" />
        <h4 className="pizza-block__title">{name}</h4>
        <div className="pizza-block__selector">
          <ul>
            { availableTypes.map((name, i) => <li 
            key={name}
            onClick={() => setActiveType(i)} 
            className={classNames({
              'active' : activeType === i,
              'passive' : !types.includes(i)
            })
            }>
              {name}</li>)}
          </ul>
          <ul>
            { availableSize.map((size, i) => <li
              key={size}
              onClick={() => onSelectSize(i)}
              className={classNames({
                'active' : activeSize === size,
                'passive' : !sizes.includes(size)
              })
              }
            >
            {size} см.
            </li>)}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">{activePrice} ₽</div>
          <div onClick={pushPizzaToCart} className="button button--outline button--add"><svg width="10" height="10" viewBox="0 0 10 10"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
              fill="#EB5A1E" />
            <path
              d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              fill="#EB5A1E" />
          </svg><span>Добавить </span></div>
        </div>
      </div>
    
    )
}

PizzaBlock.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.array.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired
}

export default PizzaBlock
