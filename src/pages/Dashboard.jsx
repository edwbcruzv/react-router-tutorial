import React from 'react'
import Button from '@mui/material/Button'
import { useNavigate, Outlet } from 'react-router-dom'

const Dashboard = () => {

    const navigate = useNavigate()

    const handlerClick = () =>{
        navigate('/') //redirecciona ala raiz por medio de un click usando un hook
    }

  return (
    <div>Dashboard
        <Button onClick={handlerClick} variant="contained" color="success">
          Logout
        </Button>
        {/* muestra el componente */}
        <Outlet/> 
    </div>
  )
}

export default Dashboard