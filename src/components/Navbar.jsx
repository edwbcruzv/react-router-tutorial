import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { NavLink } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem'

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <MenuItem ><NavLink to='/'>Home</NavLink></MenuItem>
        <MenuItem ><NavLink to='/users'>Users</NavLink></MenuItem>
        <MenuItem ><NavLink to='/about'>About</NavLink></MenuItem>
        <MenuItem ><NavLink to='/lifecycle'>Life Cycle</NavLink></MenuItem>
        <MenuItem ><NavLink to='/forms'>Fromularios</NavLink></MenuItem>
        <MenuItem ><NavLink to='/anidacion'>Anidacion</NavLink></MenuItem>
        <MenuItem ><NavLink to='/contact'>Contacto</NavLink></MenuItem>
        
      </Toolbar>
    </AppBar>
  )
}

export default Navbar