import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    CssBaseline,
    makeStyles,
} from '@material-ui/core';
import ElevationScroll from '../ElevationScroll';

const useStyles = makeStyles(
    ({
        palette: {
            common: { white, secondary },
        },
        breakpoints,
    }) => ({
        headerContainer: {
            backgroundColor: white,
        },
        headerTitle: {
            fontSize: '1rem',
            margin: 0,
            padding: 0,
            color: secondary,
            fontWeight: 700,
        },
        headerDescription: {
            fontSize: '1rem',
            margin: 0,
            padding: 0,
            color: secondary,
            display: 'none',
            marginLeft: 'auto',
            fontWeight: 700,
            [breakpoints.up('sm')]: {
                display: 'block',
            },
        },
    })
);

export default function Header(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar className={classes.headerContainer}>
                    <Toolbar>
                        <Typography className={classes.headerTitle}>
                            Maysam Abolghasemi
                        </Typography>
                        <Typography className={classes.headerDescription}>
                            Front End Developer
                        </Typography>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </React.Fragment>
    );
}
