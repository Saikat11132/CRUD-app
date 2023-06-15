import React, { useState,useEffect } from 'react'
import { FormControl,FormGroup,InputLabel,Input,Typography,styled,Button } from '@mui/material'
import {editUser,getUser} from '../service/Api.js';
import {useNavigate,useParams} from 'react-router-dom';

const Container = styled(FormGroup)`
    width:50%;
    margin:auto;
    & > div {
         margin-top:20px;
    }
`
const defaultValue = {
    name:"",
    Email:'',
    username:'',
    phone:''
}

const EditUser = () => {
    const[user,setUser]=useState(defaultValue);
    const{name , Email,username,phone}=user;
    const navigate = useNavigate() ;
    const {id}=useParams();
    useEffect(()=>{
        loadUserDetails();
    },[])
    const loadUserDetails=async ()=>{
        const response = await getUser(id);
        setUser(response.data)
    }
    const onValueChange= (e) =>{
        setUser({...user, [e.target.name]: e.target.value});
        
        console.log(user);
        
    }
    const editUserDetails=async ()=>{
        await editUser(user, id);
        navigate('/all');
    }
  
  return (
    
    <Container>
        <Typography variant='h4'>Edit User</Typography>
        <FormControl>
            <InputLabel >Name</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />

        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e)=>onValueChange(e)} name="Email" value={Email}/>
        </FormControl>
        <FormControl>
            <InputLabel>Username</InputLabel>
            <Input onChange={(e)=>onValueChange(e)} name="username" value={username}/>
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e)=>onValueChange(e)} name="phone"value={phone} />
        </FormControl>
        <FormControl>
            <Button variant="contained" onClick={()=>editUserDetails()} >Edit User</Button>
        </FormControl>
    </Container>
  )
}

export default EditUser