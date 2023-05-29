import React from "react";
import { sideListItems } from "../../data/app.data";
import { Divider, ListItem, ListItemButton, Typography, Box, List, ListItemIcon, ListItemText } from "@mui/material";
import { useSelector } from "react-redux";
import MobileMenuSideList from "./MobileSideList";
import DesktopSideList from "./DesktopsideList";

const SideList = () => {
    let isOpen = useSelector(state => state.toggle.isToggle);
    return (
        <>
            <Box sx={{
                width: '100%',
                bgcolor: 'background.paper',
            }}>
               {
               isOpen?
                        <MobileMenuSideList sideListItems={sideListItems.filter((_, i) => i < 5)} />:
                        <DesktopSideList sideListItems={sideListItems}/>
               }


            </Box>
        </>
    );
}

export default SideList;