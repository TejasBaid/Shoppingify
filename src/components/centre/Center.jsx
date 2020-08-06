import React from 'react'
import './center.scss'
import { Header } from '../header/Header'
import { ItemList } from '../item-list/ItemList'


export const Center = () => {
    return (
        <div className='center'>
            <Header />
            <ItemList />
            
        </div>
    )
}
