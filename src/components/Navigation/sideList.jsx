import React from "react";
import { sideListItems } from "../../data/app.data";
import { Divider, ListItem, ListItemButton, Typography, Box, List, ListItemIcon, ListItemText } from "@mui/material";

const SideList = () => {
    return (
    <>
        <Box sx={{
            width: '100%',
            bgcolor: 'background.paper',
        }}>
            {
                sideListItems.map(item => {
                    return (
                        <React.Fragment key={item.id}>
                            {
                                item.subdivision ? (<>
                                    <Box sx={{ mt: 2 }}>
                                            <Divider />
                                </Box>
                                    <Box sx={{ mb: 2,mt:2 }}>
                                        <Typography
                                            sx={{
                                                textTransform: "uppercase",
                                                fontWeight: "bold"
                                            }} variant="button" display="block" gutterBottom
                                        >
                                            {item.text}
                                        </Typography>
                                    </Box>
                                </>) : item.divider ? (
                                            <Divider />
   
                                ) : (
                                    <nav>
                                        <List sx={{ py: 0, my:0.5 }}>
                                            <ListItem disablePadding disableGutters>
                                                <ListItemButton>
                                                            <ListItemIcon>
                                                                {item.icon}
                                                            </ListItemIcon>
                                                            <ListItemText>
                                                                {item.text}
                                                            </ListItemText>
                                                </ListItemButton>
                                            </ListItem>
                                        </List>
                                    </nav>
                                )
                            }
                        </React.Fragment>
                    )
                })
            }


        </Box>
    </>
    );
}

export default SideList;