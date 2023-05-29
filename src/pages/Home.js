import {Box } from "@mui/material";
import AppcontentArea from "../components/Navigation/Appcontent";
import Header from "../components/Navigation/Navbar";


const Home = () => {
    return (
        <>
            <Header/>
        <Box component="main" sx={{ overflow: "Hidden" }}>
            <AppcontentArea />
        </Box>

        </>




    );
}

export default Home;
