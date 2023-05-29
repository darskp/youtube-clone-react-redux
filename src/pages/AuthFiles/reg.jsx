import { Button, Box, Typography, TextField } from '@mui/material';
import { NavLink as RouterLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Loader from '../../loader/loader';
import { useDispatch, useSelector } from 'react-redux';
import { regfail } from '../../reduxtoolkit/feature/authSlice';

const Register = () => {
    let navigate = useNavigate();
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [cpassword, setcPassword] = useState('');
    let [isloading, setLoading] = useState('');
    const dispatch = useDispatch();
    const error = useSelector((state) => state.auth.error);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password, cpassword);
        if (!email || !password && password !== cpassword) {
            dispatch(regfail('Please enter both email and password'));
            return;

        }
        dispatch({ type: 'auth/register', payload: { email, password } });
        navigate('/login')
    };


    return (
        <>
            {error && <div>{error}</div>}
            <form onSubmit={handleSubmit}>
                <div style={{ height: "80vh", display: 'flex', alignItems: 'center' }}>
                    <Box boxShadow={'5px 5px 10px #ccc'}
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '35ch' }, width: "75%", height: "85%", borderRadius: "10px", display: 'flex', alignItems: 'center', justifyContent: "center", margin: 'auto', flexDirection: 'column', padding: "20px 20px",
                            ":hover": {
                                boxShadow:
                                    '10px 10px 20px #ccc'
                            }
                        }}
                    >
                        <Typography sx={{ textAlign: 'center', fontWeight: "bold", color: "green", marginBottom: "20px",fontSize:"30px" }} variant="h1">Signup</Typography>
                        <TextField
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            label="Email"
                            name="Email"
                            placeholder='Enter your Email Id'
                            type="email"
                            margin="normal"
                        />
                        <TextField margin="normal"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            label="Password"
                            name="Password"
                            placeholder='Enter your Password'
                            type="password"

                        />
                        <TextField margin="normal"
                            value={cpassword}
                            name="Confirm_Password"
                            onChange={(e) => setcPassword(e.target.value)}
                            label="Confirm Password"
                            placeholder='Enter your Confirm Password'
                            type="password"
                        />
                        <Button type="submit" variant='contained' sx={{ margin: "10px 0px", padding: "6px 120px", fontWeight: 'bold', backgroundColor:"green" }}>Signup</Button>
                        <Typography sx={{
                            marginTop: "10px", cursor: "pointer", color: "#333"
                        }}>Have an Account? &nbsp;
                            <RouterLink component={RouterLink}
                                to="/login">Login</RouterLink>
                        </Typography>
                    </Box>
                </div>
            </form>
        </>
    );
}

export default Register;