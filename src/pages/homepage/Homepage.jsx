import React , {useContext} from 'react'
import './homepage.scss'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Center } from '../../components/centre/Center'
import { ListBar } from '../../components/list-bar/ListBar'
import {Empty} from '../../components/list-bar/Empty'
import {ListBarForm} from '../../components/list-bar/ListBarForm'
import {ListContext} from "../../context/ListContext";


export const Homepage = () => {
    const {list,form} = useContext(ListContext)
    console.log(list)
    var ListBarType = form  ? "Form" : list.length === 0 ? "Empty" : "List"
    //TODO:Implement context to handle the type of sidebar list
    return (
        <div className='homepage'>
            <Sidebar />
            <Center />
            <div className="list-bar-container">
                {ListBarType === "List"
                    ?( <ListBar /> )
                    :ListBarType === "Empty"
                        ?( <Empty /> )
                        :ListBarType === "Form"
                            ?(<ListBarForm />)
                            : null
                }
            </div>
        </div>
    )
}
