// import Auth from 'react'
import {useState} from 'react'
import {signUp} from '../redux/actionCreators'
import {login} from '../redux/actionCreators'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
// import '../CSS/Auth.css'
import background from './Images/78856742.png'


import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'

toast.configure()
function Auth(props){
 
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  

  const theme = createTheme();





   const [signup, setSignUp] = useState(false)
   const [name, setName] = useState("")
   const [username, setUsername] = useState("")
   const [creditcardnum, setCreditCardNum] = useState("")
   const [password, setPassword] = useState("")
   const history = useHistory()
   const toggleSignUp = () => setSignUp(!signup)


   

   const handleSubmit = (e) => {
       e.preventDefault();
       { signup ? props.signUp({name, username, creditcardnum, password}) : props.login({username, password})}
       history.push("/Home")
   }

   
 return <>
        {signup ? <h2>SIGN UP</h2> : <h2>LOGIN</h2>}
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
                >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5"> 
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                  
                {signup && <TextField 
                type="text" name="name" placeholder="Type your Name"  value={name} onChange={(e) => setName(e.target.value)}
                margin="normal"
                required
                fullWidth
                autoComplete="name"
                autoFocus
                />}
               
                < TextField
                  margin="normal"
                  bold
                  required
                  fullWidth
                  type="text" name="username" placeholder="Type your Username" value={username} onChange={(e) => setUsername(e.target.value)}
                  autoComplete="username"
                  /> 
                {signup && <TextField 
                  margin="normal"
                  required
                  fullWidth
                  type="text" name="creditcard" placeholder="Type your CreditCardNumber"   value={creditcardnum} onChange={(e) => setCreditCardNum(e.target.value)}
                  autoComplete="cardnumber"
                  />}
              
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  type="password" name="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  >
                 Submit
                </Button>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                  />
                <Grid container>
                  <Grid item xs>
        <Button variant="contained" color="success" onClick={toggleSignUp}> {signup ? 'LOGIN' : 'SIGNUP'} </Button>
                    <Link href="#" variant="body2">
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
          </Container>
        </ThemeProvider>

      
        </>
    }
    
    export default connect (null , {signUp, login})(Auth);
    
    
    