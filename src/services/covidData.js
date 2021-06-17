import axios from 'axios'

const getData = (baseURL) => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}

export default {getData}