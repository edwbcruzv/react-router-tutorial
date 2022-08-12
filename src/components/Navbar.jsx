import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { NavLink } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem'

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <MenuItem ><NavLink to='/'>Home</NavLink></MenuItem>
        <MenuItem ><NavLink to='/users'>Users</NavLink></MenuItem>
        <MenuItem ><NavLink to='/about'>About</NavLink></MenuItem>
        <MenuItem ><NavLink to='/hooks'>Hooks</NavLink></MenuItem>
        <Typography variant="h6">
          link
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar