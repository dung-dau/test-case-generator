import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
    typography: {
        allVariants: {
            color: '#ffffff',
        },
    },
    palette: {
        primary: {
            main: '#1F213A',
        },
        background: {
            default: '#141625',
            paper: '#1F213A'
        },
    },
});

export default darkTheme;