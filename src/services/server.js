import axios from "axios";
const baseUrl='https://contactserver-8v8t.onrender.com'

export const addContact=async(data)=>{
    return await axios.post(`${baseUrl}/contacts`,data)

}
export const getContact=async()=>{
    return await axios.get(`${baseUrl}/contacts`)
}
export const deleteContact=async(id)=>{
    return await axios.delete(`${baseUrl}/contacts/${id}`)
}
export const editContact=async(data)=>{
    return await axios.post(`${baseUrl}/contacts/`,data)
}
export const getContactApi=async()=>{
    return await axios.get(`${baseUrl}/contacts/`)
}

export const UpdateContactDetails=async(id,data)=>{
    return await axios.patch(`${baseUrl}/contacts/${id}`,data)
}