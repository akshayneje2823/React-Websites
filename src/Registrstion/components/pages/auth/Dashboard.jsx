import { Button, CssBaseline, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import ChangePassword from './ChangePassword';

function Dashboard() {
  const Navigate = useNavigate();
  const logOutHandle = () => {
    console.log('logout');
    Navigate('/login')
  }
  return (
    <>
      <CssBaseline />
      <Grid container>
      <Grid item sm={4} sx={{ backgroundColor: 'gray', p: 5, color: 'white' }}>
        <h1>Dashboard</h1>
        <Typography variant='h5'>Email: sonam@gmail.com</Typography>
        <Typography variant='h6'>Name: Sonam</Typography>
        <Button variant='contained' color='warning' size='large' onClick={logOutHandle} sx={{ mt: 8 }}>Logout</Button>
        </Grid>
        <Grid item sm={8} >
            <ChangePassword/>
        </Grid>
      </Grid>
    </>
  )
}

export default Dashboard