import SideList from "./sideList";
import { Box } from "@mui/material";
import {useSelector } from "react-redux";
import Tablist from "./Tablist";
import CardList from "./CardList";
// import { youtubeResponse } from "../../data/app.data";
const AppcontentArea = () => {
    let isOpen = useSelector(state => state.toggle.isToggle);
    const sideBarWidth = isOpen ? '60px' : '225px';
    let youtubeResponse = useSelector(state => state.video.videoList)
    return (
        <>
            <Box component="main" sx={{
                display: 'flex',
                mt: 10,
                height: '85vh',
                width: '100vw',
                overflow: 'hidden'}}>

                <Box component="div"
                    sx={{
                        flexBasis: sideBarWidth,
                        flexGrow: 0,
                        flexShrink: 0,
                        overflowY: 'auto',
                        overflowX: 'hidden',
                        position: 'sticky',
                        top: 0,
                        height: 'auto',
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
                            mt:1,
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