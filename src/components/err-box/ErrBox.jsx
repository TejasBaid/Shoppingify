import React from 'react'
import Bottle from "../../assets/images/source.svg";
import './ErrBox.scss'

export const ErrBox = () => {
  return <div className="err-box">
      <div className="img-box">
          <img className='bottle' src={Bottle} alt=""/>
      </div>
      <div className="left-panel">
          <h4 className='df'>Didn't find what you need</h4>
          <div className="add-item-btn">Add Item</div>
      </div>
  </div>
}