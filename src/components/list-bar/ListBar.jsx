import React from 'react'
import './ListBar.scss'


import {ErrBox} from "../err-box/ErrBox";
import {SaveInput} from "../save-input/SaveInput";


export const ListBar = () => {
    return (
        <div className="list-bar">
            <div className="EmptyBar">
                <div className="empty-bar-list">
                    {/* TODO:Component */}
                    <ErrBox />
                    {/* TODO:Component */}
                    <div className="sidebar-list">
                        <div className="list-header">
                            Shopping List
                        </div>
                        {/* TODO:Component */}
                        <div className="sidebar-items-list">
                            <div className="tile">
                                <div className="tile-header">Avocado</div>
                                <div className="item-count">
                                    <div className="add-count">+</div>
                                    <div className="count">3 pcs</div>
                                    <div className="subtract">-</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="em">

                    </div>


                </div>
                <SaveInput isTheme={true} />
            </div>
        </div>
    )
}

