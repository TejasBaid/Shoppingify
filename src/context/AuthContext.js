import React, {createContext, useReducer, useState} from 'react'
import {Signup,Login} from '../controller/AuthController'
import cookie from 'react-cookies'

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            name:'',
            email:'',
            password:''
        }
    );
    const handleChange = evt => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        setUserInput({[name]: newValue});
    }
    return (
        <AuthContext.Provider value={{userInput,handleChange,Signup,Login }}>
            {children}
        </AuthContext.Provider>
    )
}