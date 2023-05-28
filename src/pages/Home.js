import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../reduxtoolkit/feature/videoSlice";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { theme } from "../theme/theme";


const Home = () => {
    let [name, setName] = useState('');
    let dispatch = useDispatch();
    let videoList=useSelector(state => state.videoList)
    console.log(videoList);
    useEffect(() => {
        dispatch(getVideos(name))
    }, [name])
    return (
        <div style={{marginTop:"100px"}}>
            Testing Search : <input type="text" value={name} onChange={(e) => (setName(e.target.value))} />
        </div>
        
        
        
        
        );
}

export default Home;
