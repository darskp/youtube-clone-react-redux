import SideList from "./sideList";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Tablist from "./Tablist";

const AppcontentArea = () => {
    let isOpen = useSelector(state => state.toggle.isToggle);
    const sideBarwidth = isOpen ? '30px' : '250px';
    return (
        <>
            <Box component="main" sx={{ display: "flex", mt: 9}}>
                <Box component="div" sx={{
                    flexBasis: sideBarwidth,
                    flexGrow: 0,
                    flexShrink: 0,
                    overflowY: 'auto',
                }}>
                    <SideList />
                </Box>
                <Box component="div" sx={{display:"flex",flexDirection:"column",flexGrow:1}}>
                    <Box sx={{ my: 2, width: `calc(100vw - ${ sideBarwidth })`}}>
                        <Tablist/>
                    </Box>
                </Box>

            </Box>
        </>);
}

export default AppcontentArea;