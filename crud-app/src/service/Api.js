import axios from 'axios';

const URL = 'http://localhost:8000';

export const addUser = async (data) => {
  try{
    await axios.post(`${URL}/add`,data);
    console.log("successss..........")
  }catch(error){
    console.log("Erroooooooor from api.js........", error);
  }
}

export const getUsers=async()=>{
  try{
    return await axios.get(`${URL}/all`);
  }catch(error){
    console.log(`error from api.js.............`,error);
  }
}

export const getUser = async(id)=>{
  try{
    return await axios.get(`${URL}/${id}`)
  }catch(error){
  console.log('Error',error)
}
}
export const editUser = async(user,id)=>{
  try{
    return await axios.put(`${URL}/${id}`,user)
  }catch(error){
  console.log('Error........',error)
}
}

export const deleteUser=async(id)=>{
  try{
    return await axios.delete(`${URL}/${id}`)
  }catch(error){
    console.log(error)
  }
}