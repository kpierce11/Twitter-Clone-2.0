import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1da1f2',
        },
        text: {
            primary: '#14171a',
            secondary: '#657786',
        },
    },
    typography: {
        fontFamily: ' "Helvetica Neue", Helvetica, Arial, sans-serif',
        button: {
            textTransform: 'none',
        },
    },
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: '#fff',
                    color: '#14171a',
                    boxShadow: 'none',
                    borderBottom: '1px solid #e1e8ed',
                },
            },
        },
    },
});

export default theme;