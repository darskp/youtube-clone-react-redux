import { FaUserCircle } from "react-icons/fa";
import { Button, Box, Typography, makeStyles, IconButton } from "@mui/material";
import { theme } from "../../theme/theme";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { flexAlignCenter } from "../../styles/styles";

const SigninBtn = () => {
    return (<>
        <Box sx={flexAlignCenter}>
            <IconButton sx={{ mr: { xs: 0.5, sm: 1 }, color: "#333" }} >
                <MoreVertIcon />
            </IconButton>
            <Button sx={{
                display: "flex", alignItems: "center", border: "1px solid lightgray", borderRadius: 5, px: 2, py: 0.2
            }}>
                <Typography sx={{ mr: 1, mt: 0.5, zIndex: 1 }}><FaUserCircle size={18} color={theme.palette.info.main} /></Typography>
                <Typography sx={{ textTransform: "capitalize", fontWeight: 500 }} color={theme.palette.info.main}>Sign in</Typography>
            </Button>
        </Box>
    </>);
}

export default SigninBtn;