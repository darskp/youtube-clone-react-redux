import SideList from "./sideList";
import { Box } from "@mui/material";

const AppcontentArea = ({ isOpen }) => {
    const sideBarwidth = isOpen ? '0' : '250px';
    return (
        <>
            <Box component="main" sx={{ display: "flex", mt: 9,ml:1, overflow: "Hidden" }}>
                <Box component="div" sx={{
                    flexBasis: sideBarwidth,
                    flexGrow: 0,
                    flexShrink: 0,
                    overflowY: 'auto',
                }}>
                    <SideList />
                </Box>
            </Box>
        </>);
}

export default AppcontentArea;