import { createMuiTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const primary = '#73d216';
const secondary = '#3465a4';
const red = '#cc0000';
const white = '#fff';
const border = '#707070';
const body = '#f0f0f0';
const black = '#2e3436';

const theme = createMuiTheme({
    palette: {
        common: {
            primary,
            secondary,
            red,
            white,
            border,
            body,
            black,
        },
        primary: {
            main: primary,
        },
        secondary: {
            main: secondary,
        },
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                html: {
                    fontSize: '16px',
                },
                body: {
                    backgroundColor: fade(secondary, 0.1),
                },
            },
        },
    },
    // typography: {
    //     fontFamily: ['Courgette', 'cursive'],
    // },
    border: {
        border: '0.0625rem solid',
        borderColor: black,
    },
});

export default theme;
