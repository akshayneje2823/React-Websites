import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material'
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position='static' color='secondary'>
                    <Toolbar>
                        <Typography
                            variant='h5'
                            component='div'
                            sx={{ flexGrow: 1 }}>
                            Dummy-Shop
                        </Typography>
                        <Button component={NavLink} to='/' sx={{ color: "white",textTransform: 'none' }} style={({ isActive }) => {
                            return { background: isActive ? '#6d1b7b' : '' }
                        }}>Home</Button>
                        <Button component={NavLink} to='/contact' sx={{ color: "white",textTransform: 'none' }} style={({ isActive }) => {
                            return { background: isActive ? '#6d1b7b' : '' }
                        }}>Contact</Button>
                        <Button component={NavLink} to='/login' sx={{ color: "white",textTransform: 'none' }} style={({ isActive }) => {
                            return { background: isActive ? '#6d1b7b' : '' }
                        }}>Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar