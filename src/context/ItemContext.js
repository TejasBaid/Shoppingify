import React ,{createContext,useState} from 'react'


export const ItemContext = createContext();


export const ItemContextProvider = (props) => {
    const [category,setCategory] = useState([

    ])
  return(
      <ItemContext.Provider value={{category,setCategory}} >
          {props.children}
      </ItemContext.Provider>
  )
}