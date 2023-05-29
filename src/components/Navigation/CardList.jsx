import { Box, Grid, AppCard } from "@mui/material";
import CardIndu from "./card";

const CardList = ({items}) => {
    return (<>
        <Box>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 3 }}>
                {items.length &&
                    items.map((item) => {
                        const key = item.etag;
                        const { videoId } = item.id;
                        const { thumbnails, title, channelTitle } = item.snippet;
                        return (
                            <Grid key={key} item xs={12} sm={6} md={4} lg={3}>
                                <CardIndu
                                    url={thumbnails.high.url}
                                    title={title}
                                    channelTitle={channelTitle}
                                    videoId={videoId}
                                />
                            </Grid>
                        );
                    })}
            </Grid>
        </Box>
    </>);
}

export default CardList;