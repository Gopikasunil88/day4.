import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <AppBar>
        <Toolbar> 
            <Typography variant="h6">Api</Typography><hr></hr>&nbsp; &nbsp;
            <Link to='/b'> 
            <Button variant='contained'>Blog</Button>
            </Link> &nbsp; &nbsp;
            <Link to='/u'> 
            <Button variant='contained'>UserTable</Button>
            </Link>
            <Link to='/l'> 
            <Button variant='contained'>Linkmap</Button>
            </Link>
        </Toolbar>
       </AppBar>
    </div>
  )
}

export default Navbar
