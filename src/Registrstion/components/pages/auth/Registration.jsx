import React, { useState } from 'react';
import { TextField, Button, Box, Alert, FormControlLabel, Checkbox } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Registration() {
    const [error, setError] = useState({
        status: false,
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
            password: data.get('password'),
            password_confirmation: data.get('password_confirmatio'),
            tc: data.get('tc')
        }
        

        // Validation
        if ( actualData.name && actualData.email && actualData.password && actualData.password_confirmation && actualData.tc) {
            console.log(actualData)
            // using actuaData we can send data to backend

            
            setError({ status: true, msg: 'Registration Succesfull', type: 'success' });
            document.getElementById('registration-form').reset();
            Navigate('/')
        } else {
            setError({ status: true, msg: 'All fields Are Required', type: 'error' })
        }
    }
    return (
        <>
            <Box component='form' noValidate sx={{ mt: 1 }} id='registration-form' onSubmit={handleSubmit}>
                <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='name'
                    name='name'
                    label='Enter your Name'
                    autoFocus
                />
                <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='email'
                    name='email'
                    label='Enter your Email'
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
                <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='password_confirmation'
                    name='password_confirmation'
                    type='password'
                    label='Confrim Password'
                />
                <FormControlLabel
                    control={<Checkbox
                        value='agree'
                        color='primary'
                        name='tc'
                        id='tc' />}
                    label='I agree to term and condition.'
                />
                <Box textAlign='center'>
                    <Button
                        type='submit'
                        variant='contained'
                        sx={{ mt: 3, mb: 2, px: 5 }}>
                        Login
                    </Button>
                </Box>

                {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
            </Box>
        </>
    )
}
