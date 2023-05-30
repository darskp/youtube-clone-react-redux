import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <Box component="main" sx={{
                display: 'flex',
                alignItems:"Cener",
                textAlign:"center",
                mt:5,
            justifyContent: "center",
flexDirection:"column",
            width: '100%',
                
            }}>
            <Box component="div">
                <Typography>To access YouTube, please log in or create an account.</Typography>
            </Box>
               <Box component="div">
                <Button
                    variant="contained"
                    component={Link}
                    to="/login"
                    sx={{ backgroundColor: "#2196F3", mt: 2 }}
                >
                    Login
                </Button>
               </Box>

            </Box>
    );
};

export default HomePage;
