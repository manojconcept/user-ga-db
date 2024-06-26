import axios from "axios";

const endpoint = "users-records";
const {REACT_APP_API_KEY} = process.env
const api = `https://${REACT_APP_API_KEY}.mockapi.io/api/v1/`

export const GetData = async (setUsers) => {
    try {
        const response = await axios.get(`${api}/${endpoint}`);
        setUsers(response.data)
    } catch (error) {
        console.error("Error fetching data:");
    }
}

export const GetDataId = async (id) => {
    try {
        const response = await axios.get(`${api}/${endpoint}/${id}`)
        return response
    } catch (error) {
        console.error("Error Fetching Data")
    }
}

export const GetUpdate = async (id, user) => {
    try {
        const response = await axios.put(`${api}/${endpoint}/${id}`, user)
        return response
     
    } catch (error) {
        console.error("Error Fetching Data in getUpdate");
    }
}

export const GetPost = async (data) => {
    try {
        const response = await axios.post(`${api}/${endpoint}`,data)
        return response
    } catch (error) {
        console.error("Error Fetching on data post")
    }
}

export const GetDelete = async (id) => {
    try {
        const response = await axios.delete(`${api}/${endpoint}/${id}`)
        return response
       
    } catch (error) {
        console.error("Error Fetching Data");
    }
}
