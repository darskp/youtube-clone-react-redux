import { Button, Box, Typography, TextField } from '@mui/material';
import { NavLink as RouterLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { loginfail } from '../../reduxtoolkit/feature/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
let navigate=useNavigate();
    const error = useSelector((state) => state.auth.error);
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [isloading, setLoading] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      dispatch(loginfail('Please enter both email and password'));
      return;
    }
    dispatch({ type: 'auth/login', payload: { email, password } });
    navigate('/admin')
    }
return(
        <div>
        {error && <div>{error}</div>}
          <form onSubmit={handleSubmit}>
                <div style={{ height: "80vh", display: 'flex', alignItems: 'center',justifyContent: "center" }}>
                    <Box boxShadow={'5px 5px 10px #ccc'}
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '35ch' }, width: "80%", height: "90%", borderRadius: "10px", display: 'flex', alignItems: 'center', justifyContent: "center", margin: 'auto', flexDirection: 'column', padding: "20px 20px",
                            ":hover": {
                                boxShadow:
                                    '10px 10px 20px #ccc'
                            }
                        }}
                    >
                        <Typography sx={{ textAlign: 'center',fontSize:"40px", fontWeight: "bold", color: "#333", marginBottom: "20px" }} variant="h1" gutterBottom>Login</Typography>
                        <TextField
                            value={email}
                            label="Email"
                            placeholder='Enter your Email Id'
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            margin="normal"
                        />
                        <TextField margin="normal"
                            value={password}
                            label="Password"
                            placeholder='Enter your Password'
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            autoComplete="current-password"
                        />
                    <Button
      type="submit"
      variant="contained"
      color="primary"
      sx={{
        margin: "10px 0px",
        padding: "6px 120px",
        fontWeight: "bold",
        backgroundColor: "#2196F3",
      }}
    >
      Login
    </Button>


    
    
                        <Typography sx={{
                            marginTop: "10px", cursor: "pointer", color: "#333"
                        }}>Don't have an Account? &nbsp;
                            <RouterLink component={RouterLink}
                                to="/signup" >Signup</RouterLink>
                        </Typography>
                        <Typography sx={{
                            marginTop: "10px", cursor: "pointer", color: "#333"
                        }}>You can't access the YouTube page router without login &nbsp;
                            <RouterLink component={RouterLink}
                                to="/admin" >Check here</RouterLink>
                        </Typography>

                    </Box>
                </div>
          </form>

        </div>
        )
}

export default Login;