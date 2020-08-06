import React from 'react'
import './FormInput.scss'

export const FormInput = ({label , placeholder , isNote}) => {
  return <div className="form-input">
      <label className="item-label" htmlFor="name">{label}</label>
      <div className={isNote ? " " : "form-input-item"}>
          <input placeholder={placeholder} type="text" name="name" className={isNote ? "note" : " "}/>
      </div>
  </div>
}