import { AppBar, Toolbar, Box, IconButton, Typography } from "@mui/material";
import { AiFillYoutube } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { appBar, toolbarWrapper, flexAlignCenter, logoText, searchBar, logoTextin } from "../../styles/styles";
import SearchBar from "./SearchBar";
import SigninBtn from "./signin";
const Header = () => {

    return (
        <>
            <AppBar component="nav" sx={appBar}>
                <Toolbar sx={{ height: "70px" }}>
                    <Box sx={toolbarWrapper}>
                        <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
                            <IconButton color="inherit" aria-label="open" sx={{ mr: 1.5 }}>
                                <FiMenu/>
                            </IconButton>
                            <Box sx={{ marginBottom: "-4px" }}>
                                <AiFillYoutube size={34} color="red" />
                            </Box>
                            <Typography variant="h6" component="div" sx={logoText}>YouTube</Typography>
                            <Typography variant="h6" component="div" sx={logoTextin}>IN</Typography>
                        </Box>
                        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                            <SearchBar sx={{ SearchBar }} />
                        </Box>
                        <Box>
                            <SigninBtn/>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>

        </>);
}

export default Header; 