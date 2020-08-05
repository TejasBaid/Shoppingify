import React from 'react'
import './header.scss'
import { Searchbar } from '../searchbar/Searchbar'

export const Header = () => {
    return (
        <div className='header'>
            <div className="title">
                <h1> <span className="highlight-header">Shoppingify</span> allows you to take your shopping list wherever you go</h1>
            </div>
            <Searchbar />
        </div>
    )
}
