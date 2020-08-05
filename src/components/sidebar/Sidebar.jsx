import React from 'react'
import './sidebar.scss'
import logo from '../../assets/images/logo.svg'
import chart from '../../assets/icons/chart.svg'
import refresh from '../../assets/icons/refresh.svg'
import list from '../../assets/icons/list.svg'
import cart from '../../assets/icons/cart.svg'
import ReactTooltip from "react-tooltip";

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <div className="links"> 
                <ReactTooltip className="tooltip" place='right' effect='solid'  />
                <img data-tip="Items" className='link-item' src={list} alt=""/>
                <img data-tip="History"  className='link-item' src={refresh} alt=""/>
                <img data-tip="Statistics"  className='link-item' src={chart} alt=""/>
            </div>
            <div className="cart">
                <div className="cart-icon">
                <img className='link-item-cart' src={cart} alt=""/>
                </div>
            </div>
        </div>
    )
}
