import React from "react";
import "./Empty.scss";

import Shopping from "../../assets/images/shopping.svg";
import {ErrBox} from "../err-box/ErrBox";
import {SaveInput} from "../save-input/SaveInput";



export const Empty = () => {
  return (
    <div className="EmptyBar">
      <div className="empty-bar-list">
        <ErrBox />
        No items

        <div className="shopping-container">
            <img src={Shopping} alt=""/>
        </div>
      </div>
      <SaveInput />
    </div>
  );
};
