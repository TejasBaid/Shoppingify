import React , {useContext} from 'react'
import './ItemList.scss'
import {Category} from "../Category/Category";
import {ItemContext} from "../../context/ItemContext";
import uuid from 'react-uuid'

export const ItemList = () => {
    const {category} = useContext(ItemContext)
    console.log(category)
    return (
        <div className='item-list'>
            {category.map(cate => {
                return <Category key={uuid()} itemList={cate.items} />
            })}
        </div>
    )
}

