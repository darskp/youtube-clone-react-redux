import { Divider, ListItem, ListItemButton, Typography, Box, List, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
const MobileMenuSideList = ({ sideListItems }) => {
    return ( <>
        {
            sideListItems.map(item => {
                return (
                    <React.Fragment key={item.id}>
                        {
                         item.divider ? (
                                <Divider />

                            ) : (
                                <nav>
                                    <List sx={{ py: 0, my: 2 }}>
                                        <ListItem disablePadding disableGutters>
                                                <ListItemButton>
                                                <ListItemIcon>
                                                    {item.icon}
                                                </ListItemIcon>
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </nav>
                            )
                        }
                    </React.Fragment>)
            }
            )
        }
    </> );
}
 
export default MobileMenuSideList;