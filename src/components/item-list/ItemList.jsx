import React , {useContext} from 'react'
import './ItemList.scss'
import {Category} from "../Category/Category";
import {ItemContext} from "../../context/ItemContext";


export const ItemList = () => {
    const {category} = useContext(ItemContext)
    console.log(category)
    return (
        <div className='item-list'>
            {category.map(cate => {
                return <Category itemList={cate.items} />
            })}
        </div>
    )
}

// import React, {useContext} from 'react'
// import './ItemList.scss'
// import {ItemContextProvider} from "../../context/ItemContext";
// // import {Category} from "../Category/Category";
//
//
// export const ItemList = () => {
//     const {category} = useContext(ItemContextProvider)
//     console.log(category)
//     return (
//         <div className='item-list'>
//
//         </div>
//     )
// }
