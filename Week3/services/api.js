import axios from 'axios';


const url = "http://localhost:4000/students";

export const getstudents = async()=>{
    return await axios.get(url);
}

export const addStudent = async(user)=>{
    return await axios.post(url,user);
}
