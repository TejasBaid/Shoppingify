import React from 'react'
import './searchbar.scss'
import search from '../../assets/icons/search.svg'

export const Searchbar = () => {
    return (
        <div className="searchbar">
            <div className="search-icon">
                <img src={search} alt=""/>
            </div>
            <input type="text" className="search" placeholder='Search' />
        </div>
    )
}
