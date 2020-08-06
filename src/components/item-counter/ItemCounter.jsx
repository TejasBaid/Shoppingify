import React from 'react'
import './ItemCounter.scss'


export const ItemCounter = ({count}) => {
  return <div className="item-count">
      <div className="add-count">+</div>
      <div className="count">{count} pcs</div>
      <div className="subtract">-</div>
  </div>
}