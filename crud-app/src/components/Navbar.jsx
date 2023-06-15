import React from 'react'
import {AppBar,Toolbar,styled} from '@mui/material';
import { NavLink } from 'react-router-dom';

const   Header=styled(AppBar)`
    background:#03003d;
    
    
`
const Tooolbar = styled(Toolbar)`
    margin:auto
`
const Tab = styled(NavLink)`
    text-decoration:none;
    color:white;
    font-size:20px;
    margin-right:20px;
`

export const Navbar = () => {
    // const mg10= {"margin":"10px"}
  return (
    <Header position='static'>
        <Tooolbar>
            <Tab to="/">Saikat Ruj</Tab>
            <Tab to='/all'>All Users</Tab>
            <Tab to= '/add'>Add Users </Tab>
        </Tooolbar>
    </Header>
  )
}
export default Navbar