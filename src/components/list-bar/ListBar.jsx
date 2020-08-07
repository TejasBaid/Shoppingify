import React , {useContext} from 'react'
import './ListBar.scss'
import {ErrBox} from "../err-box/ErrBox";
import {SaveInput} from "../save-input/SaveInput";
import {ListBarTile} from "../ListBarTile/ListBarTile";
import {ListContext} from "../../context/ListContext";
import uuid from 'react-uuid'


export const ListBar = () => {
    const {list} = useContext(ListContext)
    console.log(list)
    return (
        <div className="list-bar">
            <div className="EmptyBar">
                <div className="empty-bar-list">
                    <ErrBox />
                    <div className="sidebar-list">
                        <div className="list-header">
                            Shopping List
                        </div>
                        {/* TODO:Component */}
                        <div className="sidebar-items-list">
                            {list.map(item => {
                                return <ListBarTile key={uuid()}  name={item.name} quantity={item.quantity} />
                            })}
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

