import React from 'react'
import './homepage.scss'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Center } from '../../components/centre/Center'
import { ListBar } from '../../components/list-bar/ListBar'
import {Empty} from '../../components/list-bar/Empty'
import {ListBarForm} from '../../components/list-bar/ListBarForm'

export const Homepage = () => {
    var ListBarType = "Empty"
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
