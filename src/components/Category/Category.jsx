import React from 'react'
import './Category.scss'
import {Item} from "../item/Item";


export const Category = ({itemList}) => {
  return <div>
      <h3 className="category-title">Fruits and vegetables</h3>
      <div className="category-grid">
          {itemList.map(item => {
              return <Item name={item.name} />
          })}
      </div>
  </div>
}