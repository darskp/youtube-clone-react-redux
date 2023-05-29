import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../reduxtoolkit/feature/videoSlice";
import { AppBar, Toolbar, Typography, Button,Box } from "@mui/material";
import { theme } from "../theme/theme";
import SideList from "../components/Navigation/sideList";
import AppcontentArea from "../components/Navigation/Appcontent";


const Home = () => {
    return (
        <Box component="main" sx={{ overflow: "Hidden" }}>
            <AppcontentArea />
            <div>
                {/* Testing the Search Function : <input type="text" value={name} onChange={(e) => (setName(e.target.value))} /> */}

            </div>
        </Box>





    );
}

export default Home;
