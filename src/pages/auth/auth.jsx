import './auth.scss'
import React, {Component, useReducer, useState, useContext} from 'react'
import {AuthContext} from "../../context/AuthContext";
import {IsSignedIn} from "../../context/IsSignedIn";
import ClipLoader from "react-spinners/ScaleLoader";

export const Auth = () => {
    const [signinContainer , setSigninContainer] = useState('container')
    const {userInput, handleChange, Signup,Login} = useContext(AuthContext)
    const {setIsSignedIn} = useContext(IsSignedIn)
    const toggleOn = () => {
        setSigninContainer("container right-panel-active")
    }
    const toggleOff = () => {
        setSigninContainer("container")
    }
    const [signinLoading,setSigninLoading] = useState(false)
    const [loginLoading,setLoginLoading] = useState(false)
    const SignupUser = async(e) => {
        e.preventDefault()
        setSigninLoading(true)
        const statusCode = await Signup(userInput.name, userInput.email, userInput.password)
        setSigninLoading(false)
        console.log(statusCode)
        if(statusCode === 200){
            setIsSignedIn(true)
        }
    }
    const LoginUser = async(e) => {
        e.preventDefault()
        setLoginLoading(true)
        const statusCode = await Login(userInput.email, userInput.password)
        setLoginLoading(false)
        console.log(statusCode)
        if(statusCode === 200){
            setIsSignedIn(true)
        }
    }
    return(
        <div className={"auth-body"}>
            <div className={ signinContainer } id="container">
                <div className="form-container sign-up-container">
                    <form className={"form"} action="/" >
                        <h1 className={"h1"}>Create Account</h1>
                        <div className="social-container">

                        </div>

                        <input className={"input"} type="text" placeholder="Full Name" name="name"  value={userInput.name} onChange={handleChange} />
                        <input className={"input"} type="email" placeholder="Email" name="email"  value={userInput.email} onChange={handleChange} />
                        <input className={"input"} type="password" placeholder="Password" name="password"  value={userInput.password} onChange={handleChange} />
                        <a className={"a"} href="/">Forgot your password?</a>
                        <button className={"button"} type="submit" onClick={(e) => SignupUser(e)}>{signinLoading ? ("") : "SIGNUP" }<ClipLoader
                            size={2}
                            height={10}
                            color={"#ffffff"}
                            loading={signinLoading}
                        /></button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form className={"form"} action="/" >
                        <h1 className={"h1"}>Sign in</h1>
                        <div className="social-container">

                        </div>

                        <input className={"input"} type="email" placeholder="Email" name="email"  value={userInput.email} onChange={handleChange} />
                        <input className={"input"} type="password" placeholder="Password" name="password"  value={userInput.password} onChange={handleChange} />
                        <a className={"a"} href="/">Forgot your password?</a>
                        <button className={"button"} onClick={(e) => LoginUser(e) } >{loginLoading ? ("") : "SIGN IN" }<ClipLoader
                            size={2}
                            height={10}
                            color={"#ffffff"}
                            loading={loginLoading}
                        /></button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1 className={"h1"}>Welcome Back!</h1>
                            <p className={"p"}>To keep connected with us please login with your personal info</p>
                            <button className={"button ghost"}  id="signIn " onClick= {() => toggleOff() }>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1 className={"h1"}>Hello, Friend!</h1>
                            <p className={"p"}>Enter your personal details and start journey with us</p>
                            <button className={"button ghost"}  id="signUp " onClick= {() => toggleOn() }>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
