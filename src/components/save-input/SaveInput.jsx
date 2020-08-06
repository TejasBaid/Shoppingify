import React from 'react'
import './SaveInput.scss'

export const SaveInput = ({isTheme}) => {
  return <div className="empty-bar-input">
      <div className={isTheme ? "input-bar-theme" : "input-bar"}>
          <input type="text" className="add-item-input" placeholder='Enter a name'/>
          <div className={isTheme ? "save-theme" : "save"}>Save</div>
      </div>
  </div>
}