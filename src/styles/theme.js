import { fade } from '@material-ui/core/styles/colorManipulator';

const primary = '#73d216';
const yellow = '#ffcc00';
const secondary = '#3465a4';
const red = '#cc0000';
const white = '#fff';
const border = '#707070';
const body = '#f0f0f0';
const black = '#2e3436';
const grey = '#f2f2f2';
const bodyDark = '#303030';

const generalTheme = {
    palette: {
        common: {
            primary,
            secondary,
            red,
            white,
            border,
            body,
            black,
            yellow,
        },
        primary: {
            main: primary,
        },
        secondary: {
            main: secondary,
        },
        type: 'light',
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
    border: {
        border: '0.0625rem solid',
        borderColor: black,
    },
};

export const themeConfigDark = {
    ...generalTheme,
    palette: {
        ...generalTheme.palette,
        type: 'dark',
        ...generalTheme.palette,
        background: {
            ...generalTheme.palette.background,
            paper: grey,
        },
        ...generalTheme.palette,
        text: {
            ...generalTheme.palette.text,
            primary: black,
        },
        ...generalTheme.palette,
        divider: black,
    },
    overrides: {
        ...generalTheme.overrides,
        MuiCssBaseline: {
            ...generalTheme.overrides.MuiCssBaseline,
            '@global': {
                ...generalTheme.overrides.MuiCssBaseline['@global'],
                body: {
                    ...generalTheme.overrides.MuiCssBaseline['@global'].body,
                    backgroundColor: bodyDark,
                },
            },
        },
    },
};
export const themeConfigLight = generalTheme;
