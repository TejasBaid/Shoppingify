import React,{useEffect,useContext,useState} from 'react'
import './center.scss'
import { Header } from '../header/Header'
import { ItemList } from '../item-list/ItemList'
import {fetchData} from "../../controller/ItemListController";
import {ItemContext} from "../../context/ItemContext";
import PuffLoader from 'react-spinners/PuffLoader'
import {IsSignedIn} from "../../context/IsSignedIn";


export const Center = () => {
    const {category, setCategory} = useContext(ItemContext)
    const {jwtToken} = useContext(IsSignedIn)
    const [dataLoading,setDataLoading] = useState(false)
    useEffect(async () => {
        setDataLoading(true)
        const data = await fetchData(jwtToken)
        setCategory(data.msg)
        setDataLoading(false)
    },[])
    return (
        <div>

            {
                dataLoading ? (
                    <div className="loader-center">

                        <PuffLoader
                            color={"#F9A10B"}
                            size={150}
                            loading={dataLoading}
                        />
                    </div>
                ) : (
                    <div className={"center"}>
                        <Header />
                        <ItemList />
                    </div>
                )
            }



        </div>
    )
}
