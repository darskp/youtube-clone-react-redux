import { IconButton, Paper, Box, InputBase } from "@mui/material";
import { flexAlignCenter, searchBar } from "../../styles/styles";
import Button from '@mui/material/Button';
import { BsFillMicFill } from "react-icons/bs";
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = () => {
    return (<>
        <Box sx={flexAlignCenter}>
            <Paper component="form" sx={searchBar}>
                <InputBase sx={{ flex: 1, pl: 1, ml: 1, fontSize: 17, color: "#000000" }} placeholder="Search" />
                <IconButton
                    type="button"
                    aria-label="search"
                    sx={{
                        border: '1px solid #ccc',
                        bgcolor: '#f8f8f8',
                        borderRadius: '0px 40px 40px 0px',
                        p: '6.5px 18px',
                        '&:hover': {
                            background: '#f1f1f1',
                        },
                        fontSize: '5rem',
                    }}
                >
                    <SearchIcon />
                </IconButton>
            </Paper>
            <Button sx={{ color: "#333" }}>
                <BsFillMicFill size={20} />
            </Button>
        </Box>
    </>);
}

export default SearchBar;