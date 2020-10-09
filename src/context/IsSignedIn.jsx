import React,{createContext,useState,useEffect} from 'react'
import cookie from 'react-cookies'

export const IsSignedIn = createContext()

export const IsSignedInProvider = ({children}) => {
    const [jwtToken,setJwtToken] = useState("")
    const [isSignedIn, setIsSignedIn] = useState(false)

    const loadJwt = async () => {
        const jwtToken =  await cookie.load('jwtToken')
        setJwtToken(jwtToken)
        if(jwtToken){
            setIsSignedIn(true)
            return jwtToken
        }else{
            setIsSignedIn(false)
            return false
        }
    }
    return(
        <IsSignedIn.Provider value={{isSignedIn,setIsSignedIn,loadJwt,setJwtToken,jwtToken}}>
            {children}
        </IsSignedIn.Provider>
    )
}
