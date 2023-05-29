import { FaUserCircle } from "react-icons/fa";
import { Button, Box, Typography, makeStyles, IconButton } from "@mui/material";
import { theme } from "../../theme/theme";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { flexAlignCenter } from "../../styles/styles";
import { logout } from "../../reduxtoolkit/feature/authSlice";
import {auth} from '../../firebase.js'
import { useSelector, useDispatch } from 'react-redux';
const SigninBtn = () => {
    const user = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const handleLogout = async () => {
        try {
            await auth.signOut();
            dispatch(logout());
        } catch (error) {
            console.error(error);
        }
    };
    return (<>
        <Box sx={flexAlignCenter}>
            {user.isLoggedIn && (
                <li>
                    <button onClick={handleLogout}>Logout</button>
                </li>
            )}
            <IconButton sx={{ mr: { xs: 0.5, sm: 1 }, color: "#333" }} >
                <MoreVertIcon />
            </IconButton>
            <Button sx={{
                display: "flex", alignItems: "center", border: { xs: 'none', sm: "1px solid lightgray" }, borderRadius: { xs: 0, sm: 5 }, px: 2, py: 0.2
            }}>
                <Typography sx={{ mr: 1, mt: 0.5}}><FaUserCircle size={25} color={theme.palette.info.main} /></Typography>
                <Typography sx={{ textTransform: "capitalize", fontWeight: 500, display: { xs: 'none', sm: 'flex' } }} color={theme.palette.info.main}>Sign in</Typography>
            </Button>
        </Box>
    </>);

}

export default SigninBtn;