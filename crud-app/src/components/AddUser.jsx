import React, { useState } from 'react'
import { FormControl,FormGroup,InputLabel,Input,Typography,styled,Button } from '@mui/material'
import {addUser} from '../service/Api.js';
import {useNavigate} from 'react-router-dom';

const Container = styled(FormGroup)`
    
    width:50%;
    margin:auto;
    & > div {
         margin-top:20px;
    }
`
const defaultValue = {
    name:"ji",
    Email:'',
    username:'rsysy',
    phone:6
}

const AddUser = () => {
    const[user,setUser]=useState(defaultValue);
    const navigate = useNavigate() ;
    const onValueChange= (e) =>{
        setUser({...user, [e.target.name]: e.target.value});
        
        console.log(user);
        
    }
    const addUserDetails=async ()=>{
        await addUser(user);
        navigate('/all');
    }
  return (
    <Container>
        <Typography variant='h4'></Typography>
        <FormControl>
            <InputLabel >Name</InputLabel>
            <Input  onBlur={(e)=>onValueChange(e)} name='name'/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onBlur={(e)=>onValueChange(e)} name="Email" />
        </FormControl>
        <FormControl>
            <InputLabel>Username</InputLabel>
            <Input onBlur={(e)=>onValueChange(e)} name="username" />
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e)=>onValueChange(e)} name="phone" />
        </FormControl>
        <FormControl>
            <Button variant="contained" onClick={()=>addUserDetails()} >Add User</Button>
        </FormControl>
    </Container>
  )
}

export default AddUser