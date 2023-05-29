import { Link } from "react-router-dom";
import { Box, Avatar, Card, CardContent, List, ListItem, ListItemAvatar, Typography, CardMedia } from "@mui/material";
import { AiFillCheckCircle } from 'react-icons/ai';
import { trimText } from "../../data/app.data";
import { appCardList, flexColumnGrow } from "../../styles/styles";
import { useSelector } from "react-redux";


const CardIndu = ({ url, title, channelTitle, videoId }) => {
    let isOpen = useSelector(state => state.toggle.isToggle);
    return (
        <>
            <Card sx={{ boxShadow: 0 }}>
                <Link href={`https://www.youtube.com/watch?v=${videoId}`}>
                    <CardMedia
                        component="img"
                        image={url}
                        alt={title}
                        sx={{
                            borderRadius: 2,
                            height: isOpen
                                ? { sm: '200px', xs: '180px', md: '165px', lg:'190px' }
                                : { sm: '250px', xs: '185px', md: '140px',lg:"166px" },
                        }}
                    />                
                    
                    </Link>


                    
                <CardContent sx={{ m: 0, p: 0 }}>
                    <List sx={appCardList}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Channel avatar"
                                    src={`https://i.pravatar.cc/150?img=1`}
                                />
                            </ListItemAvatar>
                            <Box sx={flexColumnGrow}>
                                <Typography
                                    sx={{ fontWeight: 'bold', mb: 1 }}
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    {trimText(title)}
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography
                                        sx={{ mr: 1, mb: 0, p: 0 }}
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        {channelTitle}
                                    </Typography>
                                    <AiFillCheckCircle />
                                </Box>
                            </Box>
                        </ListItem>
                    </List>
                </CardContent>
            </Card>

        </>);
}

export default CardIndu;