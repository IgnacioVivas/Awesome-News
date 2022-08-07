import React from 'react'
import Classes from '../styles/category.module.scss'

function Category({ category }) {
    return (
        <div id='cardCategory' className={Classes.cardCategory}>
            <img src="https://tse2.mm.bing.net/th?id=OIP.iN0RUb7Y5dQ2LXAfuI_NbAHaE6&pid=Api" alt="" />
            <div className={Classes.nameCategory}>
                <p id='categoryName'>{category}</p>
            </div>
        </div>
    )
}

export default Category