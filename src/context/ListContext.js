import React , {createContext , useState} from 'react'

export const ListContext = createContext()

export const ListContextProvider = (props) => {
    const [form,setForm] = useState(false)
    const [number , setNumber] = useState("false")
    const [header , setHeader] = useState("Shopping List")
    const [list, setList] = useState([
        {name:"Apple",quantity:3, _id:1},
        {name:"Banana",quantity:2,_id:2},
        {name:"Oranges",quantity:1,_id:3} ,
        {name:"Beetroot",quantity:8, _id:3} ])




    return (

        <ListContext.Provider value={
            {list,setList,form , setForm , header,setHeader  }
        }>



            {props.children}
        </ListContext.Provider>
    )}