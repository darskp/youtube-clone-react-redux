import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const theme = createTheme({
    button: {
        color: "#333",
        backgroundColor: red[500]
    },
    palette: {
        primary: {
            main: red[500]
        }
    }
})