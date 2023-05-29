import SideList from "./sideList";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Tablist from "./Tablist";
import CardList from "./CardList";
import { youtubeResponse } from "../../data/app.data";
import { useTheme } from '@mui/material/styles';
const AppcontentArea = () => {
    const theme = useTheme();
    let isOpen = useSelector(state => state.toggle.isToggle);
    const sideBarWidth = isOpen ? '60px' : '225px';
    // const youtubeResponse = useSelector((state) => state.video.videoList)
    // const [items, setItems] = useState (youtubeResponse)
    const { xs, sm, md } = theme.breakpoints;
    // const sideBarWidth = isOpen ? (xs ? '0px' : (sm ? '10px' : '250px')) : '250px';

    console.log(youtubeResponse);

    return (
        <>
            <Box component="main" sx={{
                display: 'flex',
                mt: 10,
                height: '90vh',
                width: '100vw',
                overflow: 'hidden'}}>

                <Box component="div"
                    sx={{
                        flexBasis: sideBarWidth,
                        flexGrow: 0,
                        flexShrink: 0,
                        overflowY: 'auto',
                        position: 'sticky',
                        top: 0,
                        height: '90vh',
                    }}
                >
                    <SideList />
                </Box>
                
                <Box component="div" sx={{ display: "flex", flexDirection: "column", flexGrow: 1, }}>
                    <Box sx={{ mb: 1, width: `calc(100vw - ${sideBarWidth})` }}>
                        <Tablist />

                    </Box>
                    <Box component="div"
                        sx={{
                            flexGrow: 1,
                            p: 1,
                            overflowY: 'auto',
                            overflowX: 'hidden',
                            width: `calc(100vw - ${sideBarWidth})`,
                        }} >
                        <CardList items={youtubeResponse} />
                    </Box>
                </Box>
            </Box>
        </>);
}

export default AppcontentArea;