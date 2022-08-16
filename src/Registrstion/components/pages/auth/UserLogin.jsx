import React from 'react';
import {TextField,Button,Box,Alert} from '@mui/material'
import { NavLink } from 'react-router-dom';

function UserLogin() {
  return (
    <>
    <Box component='form' noValidate sx={{mt: 1}} id='login-from'>
        <TextField margin='normal' required fullWidth id='email' name='email' label='Enter your Email' autoFocus/>
        <TextField margin='normal' required fullWidth id='password' name='password' type='password' label='Enter your Password' autoFocus/>
        <Box textAlign='center'>
            <Button type='submit' variant='contained' sx={{mt:3,mb:2,px:5}}>Login</Button>
        </Box>
        <NavLink to='/' >Forgot Password?</NavLink>
    </Box>
    </>
  )
}

export default UserLogin