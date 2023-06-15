// import User from "../schema/user-schema";
import mongoose from "mongoose";

//Schema
// import autoIncrement from 'mongoose-auto-increment';
const userSchema = new mongoose.Schema({
    name:String,
    username:String,
    Email:String,
    phone:String
})

const User = mongoose.model('user',userSchema);
//function
export const addUser = async (request,response)=>{
    const user = request.body;
    const newUser = new User(user);
    try{
        const dataToSave= await newUser.save();
        console.log(newUser);
    }catch(error){
        response.status(409).json({messege:error.messege})
    }
}

export const getUsers=async(request,response)=>{
    try{
        const users = await User.find({});
        response.status(200).json(users);
    }catch(error){
        response.status(404).json({messege:error.messege});
    }
}

export const getUser= async(request,response)=>{
    try{
        
        const user = await User.findById(request.params.id);
        response.status(200).json(user);
}catch(error){
    response.status(404).json({messege:error.messege});
}
}

export const editUser = async (request, response) => {
    let user = request.body;

    const editUser = new User(user);
    try{
        await User.updateOne({_id: request.params.id}, editUser);
        response.status(201).json(editUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

export const deleteUser = async (request, response) => {
    try{
        await User.deleteOne({_id: request.params.id});
        response.status(201).json("User deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}
