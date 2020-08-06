import React from 'react'
import './item.scss'

export const Item = ({name}) => {
    return (
        <div className="item">
            <h3 className='item-header'>{name}</h3>
            <h3 className="add">+</h3>
        </div>
    )
}
