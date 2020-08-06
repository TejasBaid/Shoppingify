import React ,{createContext,useState} from 'react'
import {Homepage} from "../pages/homepage/Homepage";

export const ItemContext = createContext();


export const ItemContextProvider = (props) => {
    const [category,useCategories] = useState([
        {
            name: "Fruits and Vegetables",
            items : [
                {name:"Avocado"},
                {name:"Banana"},
                {name:"Bunch of carrots"},
                {name:"Chicken 1kg"},
                {name:"Pre-Cooked Corn 450g"},
                {name:"Mandarin Nadorcott"},
                {name:"Piele de sapo melon"},
                {name:"Watermelon"},
            ]
        },
        {
            name: "Meat and Fish",
            items : [
                {name:"Chicken leg box"},
                {name:"Chicken 1kg"},
                {name:"Pork fillets 450g"},
                {name:"Salmon 1kg"},

            ]
        },
        {
            name: "Beverages",
            items : [
                {name:"Cola"},
                {name:"Mango Juice"},
                {name:"Pineapple carte"},
                {name:"Salmonella"},

            ]
        }
    ])
  return(
      <ItemContext.Provider value={{category}} >
          {props.children}
      </ItemContext.Provider>
  )
}