import axios from 'axios'
import cookie from 'react-cookies'


export const fetchData = async(jwtToken) => {
    const response = await axios.get('http://localhost:5000/api/category/view', {
        headers: {
            'x-auth-token':jwtToken
        }
    })
    return response.data
}
