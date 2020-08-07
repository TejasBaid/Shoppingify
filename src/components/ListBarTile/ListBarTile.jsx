import React , {useState} from 'react'
import {ItemCounter} from "../item-counter/ItemCounter";
import './ListBarTile.scss'

export const ListBarTile = ({name , quantity }) => {


  return < div className="tile">
      <div className="tile-header">{name}</div>
      <ItemCounter count={quantity} />
  </div>
}