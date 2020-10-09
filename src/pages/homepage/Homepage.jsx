import React , {useContext,useEffect} from 'react'
import './homepage.scss'
import {Auth} from "../auth/auth";
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Center } from '../../components/centre/Center'
import { ListBar } from '../../components/list-bar/ListBar'
import {Empty} from '../../components/list-bar/Empty'
import {ListBarForm} from '../../components/list-bar/ListBarForm'
import {ListContext} from "../../context/ListContext";
import {IsSignedIn} from "../../context/IsSignedIn";
import {fetchData} from "../../controller/ItemListController";
import {ItemContext} from "../../context/ItemContext";
import {getList} from "../../controller/ShoppingList";


export const Homepage = () => {
    const {list,form} = useContext(ListContext)
    const {category, setCategory} = useContext(ItemContext)
    const {isSignedIn,setIsSignedIn,loadJwt} = useContext(IsSignedIn)
    const {setList} = useContext(ListContext)
    useEffect(async() => {
       const jwtToken = await loadJwt()
        const ShoppingList = await getList(jwtToken)
        setList(ShoppingList)

    },[])
    var ListBarType = form  ? "Form" : list.length === 0 ? "Empty" : "List"
    //TODO:Implement context to handle the type of sidebar list
    if(isSignedIn){
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
    }else{
        return <Auth />
    }
}
