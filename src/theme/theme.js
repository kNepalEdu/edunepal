import { createTheme } from "@mui/material/styles";
import { indigo } from "@mui/material/colors";



const theme = createTheme({
    palette: {
        light: indigo[50],
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
    },
    secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
    },
    
})