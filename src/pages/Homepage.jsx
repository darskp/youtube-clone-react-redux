import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <Button
                variant="contained"
                component={Link}
                to="/signup"
            >
                Sign Up
            </Button>
            <Button
                variant="contained"
                component={Link}
                to="/login"
            >
                Login
            </Button>
        </div>
    );
};

export default HomePage;
