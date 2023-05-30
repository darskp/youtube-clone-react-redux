import { FaSignOutAlt } from "react-icons/fa";
import { Button, Box, Typography, makeStyles, IconButton } from "@mui/material";
import { theme } from "../../theme/theme";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { flexAlignCenter } from "../../styles/styles";
import { logout } from "../../reduxtoolkit/feature/authSlice";
import { auth } from '../../firebase.js'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
const SigninBtn = () => {
let navigate=useNavigate()
    const email = useSelector((state) => state.auth.email);
    const dispatch = useDispatch();
    const handleLogout = async () => {
        try {
            await auth.signOut();
            dispatch(logout());
            navigate('/')
        } catch (error) {
            console.error(error);
        }
    };
    let setEmail = () => {
        let uName = email.slice(0, email.indexOf('@'));
        return uName.charAt(0).toUpperCase() + uName.slice(1)
    }
    return (<>
        <Box sx={flexAlignCenter}>
            <IconButton sx={{ mr: { xs: 0.5, sm: 1 }, color: "#333" }} >
                <MoreVertIcon />
            </IconButton>
            <Button >
                <Typography sx={{ textTransform: "capitalize", fontWeight: 500 }} color={theme.palette.primary.main}>{setEmail()}</Typography>
            </Button>
            <Button sx={{
                display: "flex", alignItems: "center", border: { xs: 'none', sm: "1px solid lightgray" }, borderRadius: { xs: 0, sm: 5 }, px: 2, py: 0.2
            }}>
                <Typography onClick={handleLogout} title="logout" sx={{ mr: 1, mt: 0.5, display: { xs: 'none', sm: 'flex' } }}><FaSignOutAlt size={20} color={theme.palette.info.main} /></Typography>
                <Typography sx={{ textTransform: "capitalize", fontWeight: 500, }} onClick={handleLogout} color={theme.palette.info.main}>Logout</Typography>
            </Button>
        </Box>
    </>);

}

export default SigninBtn;