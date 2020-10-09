import axios from "axios";
import cookie from 'react-cookies'

export const Signup = async (name,email,password) => {

    const response = await axios.post('/auth/signup', {
        name:name,
        email:email,
        password:password,
    })
    cookie.save('jwtToken', response.data.msg, { path: '/' })
    axios.defaults.headers.common = {
        "x-auth-token":response.data.msg
    }
    return response.status
}

export const Login = async (email,password) => {

    const response = await axios.post('/auth/login', {
        email:email,
        password:password,
    })
    cookie.save('jwtToken', response.data.msg, { path: '/' })
    axios.defaults.headers.common = {
        "x-auth-token":response.data.msg
    }
    console.log(axios.defaults.headers)
    return response.status
}
