import React from 'react'
import './ItemList.scss'

export const ItemList = () => {
    return (
        <div className='item-list'>
            <h3 className="category-title">Fruits and vegetables</h3>
            <div className="category-grid">
                <div className="item">
                    <h3 className='item-header'>Avocado</h3>
                    <h3 className="add">+</h3>
                </div>
                <div className="item">
                    <h3 className='item-header'>Bananas</h3>
                    <h3 className="add">+</h3>
                </div>
                <div className="item">
                    <h3 className='item-header'>Bunch of carrots 5pcs</h3>
                    <h3 className="add">+</h3>
                </div>
                <div className="item">
                    <h3 className='item-header'>Chicken 1kg</h3>
                    <h3 className="add">+</h3>
                </div>
                <div className="item">
                    <h3 className='item-header'>Pre Cooked Corn 450g</h3>
                    <h3 className="add">+</h3>
                </div>
                <div className="item">
                    <h3 className='item-header'>Mandarin Nadorcott</h3>
                    <h3 className="add">+</h3>
                </div>
                <div className="item">
                    <h3 className='item-header'>Watermelon</h3>
                    <h3 className="add">+</h3>
                </div>
            </div>
            <h3 className="category-title">Meat and fish</h3>
            <div className="category-grid">
                <div className="item">
                    <h3 className='item-header'>Chicken Leg Box</h3>
                    <h3 className="add">+</h3>
                </div>
                <div className="item">
                    <h3 className='item-header'>Chicken 1kg</h3>
                    <h3 className="add">+</h3>
                </div>
                <div className="item">
                    <h3 className='item-header'>Pork fillets 450g</h3>
                    <h3 className="add">+</h3>
                </div>
                <div className="item">
                    <h3 className='item-header'>Salmon 1kg</h3>
                    <h3 className="add">+</h3>
                </div>
                
            </div>
        </div>
    )
}
