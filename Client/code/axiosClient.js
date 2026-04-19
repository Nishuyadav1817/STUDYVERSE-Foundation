import axios from "axios"

const axiosClient = axios.create({
    baseURL: 'https://studyverse-foundation-8cdb.vercel.app', // Vercel backend
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});



export default axiosClient;

