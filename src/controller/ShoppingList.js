import axios from 'axios'

export const getList = async (jwtToken) => {
    const response = await axios.get('http://localhost:5000/api/list/view',{
        headers:{
            "x-auth-token":jwtToken
        }
    })
    return response.data.msg.items
}