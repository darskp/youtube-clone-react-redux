import { createTheme } from "@mui/material";
import { grey, pink } from "@mui/material/colors";
export const theme = createTheme({
    breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
    typography: {
        allVariants: {
            fontFamily: "Roboto",
            fontSize: "14px",
            fontWeight: 400
        }
    },
    palette: {
        primary: {
            main: grey[700]
        },
        secondary: {
            main: pink[500]
        },
        info: {
            main: "#1976d2"
        }
    },
    components: {
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: 'transparent'
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    backgroundColor: '#eee',
                    borderRadius: 30,
                    marginRight: '10px',
                    marginTop: "10px",
                    minHeight: '20px',
                    minWidth: '60px',
                    selected: {
          backgroundColor: "black",
          color: "white",
        },
                    ':active': {
                        backgroundColor:'black',
                        color:"white"
                    },
                    ':selected': {
                        backgroundColor:'black',
                        color:"white"
                    },
                    ':focus':{
                    backgroundColor:'black',
                    color:'white'
                    }
                },
                indicator:{
                backgroundColor:'black',
                    color:'white'
                }
            }
        }
    }
})