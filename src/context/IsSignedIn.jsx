import React,{createContext,useState,useEffect} from 'react'
import cookie from 'react-cookies'

export const IsSignedIn = createContext()

export const IsSignedInProvider = ({children}) => {
    const [jwtToken,setJwtToken] = useState("")
    const loadJwt = async () => {
        const jwtToken =  await cookie.load('jwtToken')
        setJwtToken(jwtToken)
        console.log(jwtToken)
        if(jwtToken){
            setIsSignedIn(true)
        }else{
            setIsSignedIn(false)
        }
    }
    const [isSignedIn, setIsSignedIn] = useState(false)
    return(
        <IsSignedIn.Provider value={{isSignedIn,setIsSignedIn,loadJwt,setJwtToken}}>
            {children}
        </IsSignedIn.Provider>
    )
}
