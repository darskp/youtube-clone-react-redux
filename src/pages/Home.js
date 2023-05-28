import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../reduxtoolkit/feature/videoSlice";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { theme } from "../theme/theme";


const Home = () => {
    let [name, setName] = useState('');
    let dispatch = useDispatch();
    useSelector(state => state.video)
    useEffect(() => {
        dispatch(getVideos(name))
    }, [name])
    return (
        <>
            <input type="text" value={name} onChange={(e) => (setName(e.target.value))} />
        </>);
}

export default Home;



// const Home = () => {


//     return (

//         <AppBar>
//             <Toolbar>
//                 <Typography variant="h6">
//                     HELLO
//                 </Typography>
//             </Toolbar>
//         </AppBar>
//     )
// }

// export default Home;