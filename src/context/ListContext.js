import React , {createContext , useState} from 'react'

export const ListContext = createContext()

export const ListContextProvider = (props) => {
    const [form,setForm] = useState(false)
    const [number , setNumber] = useState("false")
    const [header , setHeader] = useState("Shopping List")
    const [list, setList] = useState([])




    return (

        <ListContext.Provider value={
            {list,setList,form , setForm , header,setHeader  }
        }>



            {props.children}
        </ListContext.Provider>
    )}