import React from 'react'

const Categories = ({categories, activeCategory, onClickItem}) => {
    

    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickItem(null)}>Все</li>
                {
                    categories.map((categoryName, index) =>
                        <li
                            key={`${categoryName}_${index}`}
                            className={activeCategory === index ? 'active' : ''}
                            onClick={() => onClickItem(index)}>{categoryName}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Categories
