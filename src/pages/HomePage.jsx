import { Paper } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <Paper elevation={5} square>
        <Link to='/users'>Usuarios</Link>
    </Paper>
  )
}

export default HomePage