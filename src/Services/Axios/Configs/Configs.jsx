import axios from "axios";

const apiRequest = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer'
    }
})

export default apiRequest