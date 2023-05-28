import React from "react";
import { sideListItems } from "../../data/app.data";
import { Divider, ListItem, Typography, Box, List, ListItemIcon, ListItemText } from "@mui/material";

const SideList = () => {
    return (<>

        <Box sx={{
            width: '98%',
            bgcolor: 'background.paper',
            borderRight: '1px solid #ddd',
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
                                        <Box sx={{mb: 2, mt: 2 }}>
                                            <Divider />
                                </Box>
   
                                ) : (
                                    <nav>
                                        <List sx={{ p: 0, my:1.5 }}>
                                            <ListItem disablePadding>
                                                <ListItemIcon>
                                                    {item.icon}
                                                </ListItemIcon>
                                                <ListItemText>
                                                    {item.text}
                                                </ListItemText>
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
    </>);
}

export default SideList;