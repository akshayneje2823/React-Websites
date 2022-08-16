import React,{useState} from 'react';
import { TextField, Button, Box, Alert } from '@mui/material'
import { NavLink, useNavigate} from 'react-router-dom';

function UserLogin() {
  const [error, setError] = useState({
    status:false,
    msg: "",
    type: ""
  })

  const Navigate = useNavigate()

  const handleSubmit = (e) => {

    e.preventDefault();
    // Getting Data
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get('email'),
      password: data.get('password')
    }
    //console.log(actualData);
    // Validation
    if(actualData.email && actualData.password){
      console.log(actualData)
      // using actuaData we can send data to backend
      
      document.getElementById('login-from').reset();
      setError({status:true,msg:'Login Succesfull',type:'success'});
      Navigate('/')
    }else{
      setError({status:true,msg:'All fields Are Required',type:'error'})
    }
  }
  return (
    <>
      <Box component='form' noValidate sx={{ mt: 1 }} id='login-from' onSubmit={handleSubmit}>
        <TextField
          margin='normal'
          required
          fullWidth
          id='email'
          name='email'
          label='Enter your Email'
          autoFocus
        />
        <TextField
          margin='normal'
          required
          fullWidth
          id='password'
          name='password'
          type='password'
          label='Enter your Password'
        />
        <Box textAlign='center'>
          <Button
            type='submit'
            variant='contained'
            sx={{ mt: 3, mb: 2, px: 5 }}>
            Login
          </Button>
        </Box>
        <NavLink to='/'>Forgot Password?</NavLink>
        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
      </Box>
    </>
  )
}

export default UserLogin