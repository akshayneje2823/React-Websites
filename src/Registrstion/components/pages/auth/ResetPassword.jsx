import React, { useState } from 'react';
import { Grid, TextField, Button, Box, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    })
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        // Getting Data

        const data = new FormData(e.currentTarget);
        const actualData = {
            password: data.get('password'),
            password_confirmation: data.get('password_confirmation')
        }

        // Validation

        if (actualData.password && actualData.password_confirmation) {
            if (actualData.password === actualData.password_confirmation) {
                console.log(actualData);
                document.getElementById('password-reset-email-from').reset();
                setError({ status: true, msg: 'Done.Succesfully redirecting to login page...', type: 'success' })
                setTimeout(() => {
                    navigate("/login")
                }, 3000);
            }else{
                setError({ status: true, msg: 'Password did not match.', type: 'error' });
            }
        } else {
            setError({ status: true, msg: 'Please Provide Valid Email', type: 'error' })
        }
    }
    return (
        <>
            <Grid container justifyContent='center'>
                <Grid item sm={6} xs={12}>
                    <h1>Reset Password</h1>
                    <Box
                        component='form'
                        noValidate sx={{ mt: 1 }}
                        id='password-reset-email-from'
                        onSubmit={handleSubmit}
                    >
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
                        <Box textAlign='center'>
                            <Button
                                type='submit'
                                variant='contained'
                                sx={{ mt: 3, mb: 2, px: 5 }}>
                                Send
                            </Button>
                        </Box>
                        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default ResetPassword