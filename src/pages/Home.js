import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../reduxtoolkit/feature/videoSlice";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { theme } from "../theme/theme";
import SideList from "../components/Navigation/sideList";
import AppcontentArea from "../components/Navigation/Appcontent";


const Home = () => {
    let [name, setName] = useState('');
    let dispatch = useDispatch();
    let videoList = useSelector(state => state.videoList)
    // console.log(videoList);
    useEffect(() => {
        dispatch(getVideos(name))
    }, [name])
    let isOpen=false;
    return (
        <div>
            {/* Testing the Search Function : <input type="text" value={name} onChange={(e) => (setName(e.target.value))} /> */}
            <AppcontentArea isopen={isOpen}/>
        </div>




    );
}

export default Home;
