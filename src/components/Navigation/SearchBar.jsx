import { IconButton, Paper, Box, InputBase } from "@mui/material";
import { flexAlignCenter, searchBar } from "../../styles/styles";
import Button from '@mui/material/Button';
import { BsFillMicFill } from "react-icons/bs";
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getVideos } from "../../reduxtoolkit/feature/videoSlice";
const SearchBar = () => {
    const [videoname, setVideoname] = useState("");
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getVideos(videoname));
    }, [dispatch, videoname]);

   let handleSubmit=(e)=>{
e.preventDefault();
       dispatch(getVideos(videoname));
}

    return (<>

        <Box sx={flexAlignCenter}>
            <Paper component="form" sx={searchBar} onSubmit={handleSubmit}>
                <InputBase onChange={(e)=> setVideoname(e.target.value)} value={videoname} sx={{ flex: 1, pl: 1, ml: 1, fontSize: 17, color: "#000000" }} placeholder="Search"/>
                <IconButton
                    type="submit"
                    aria-label="search"
                    sx={{
                        border: '1px solid #ccc',
                        bgcolor: '#f8f8f8',
                        borderRadius: '0px 40px 40px 0px',
                        p: '6.5px 18px',
                        '&:hover': {
                            background: '#f1f1f1',
                        },
                        fontSize: '5rem',
                    }}
                >
                    <SearchIcon />
                </IconButton>
            </Paper>
            <Button sx={{ color: "#333" }}>
                <BsFillMicFill size={20} />
            </Button>
        </Box>
    </>);
}

export default SearchBar;