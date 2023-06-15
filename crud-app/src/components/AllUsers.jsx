import React, { useEffect, useState } from 'react'
import {Table,TableBody,TableHead,TableCell,TableRow,styled,Button} from '@mui/material'
import {getUsers,deleteUser} from '../service/Api'
import {Link} from 'react-router-dom';


const StyledTable = styled(Table)`

  width:90%;
  margin:50px auto 0 auto;
  
`
const THead = styled(TableRow)`
  background:#03003d;
  
  & > th{
    color: #fff;
    font-size: 20px;
  }
  
`
const TBody = styled(TableRow)`
  & > td {
    font-size: 20px;
  }
`


const AllUsers = () => {
  const[users,setUsers]=useState([]);
  useEffect(()=>{
    getAllUsers()
    },[])
  const getAllUsers=async()=>{
    let response= await getUsers();
    setUsers(response.data);
    
  }
  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
}

  return (
    <StyledTable>
      <TableHead >
        <THead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>UserName</TableCell>
          <TableCell>Exit</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {
          users.map(user=>(
            <TBody key={user._id}>
              <TableCell>{user._id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.Email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
              <Button variant="contained" style={{marginRight:20}} LinkComponent={Link} to={`/edit/${user._id}`}>Edit</Button>
              <Button variant='contained' color="secondary" onClick={()=>deleteUserData(user._id)}>Delete</Button>
              </TableCell>
            </TBody>
          ))
        }
      </TableBody>
    </StyledTable>
  )
}

export default AllUsers