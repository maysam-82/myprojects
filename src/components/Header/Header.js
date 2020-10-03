import React from 'react';
import logo from '../../assets/img/logo_svg.svg';
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
        logoContainer: {
            marginLeft: 'auto',
            width: '3rem',
        },
        logo: { display: 'block', width: '100%' },
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
                        <div className={classes.logoContainer}>
                            <img
                                className={classes.logo}
                                src={logo}
                                alt="projects-logo"
                            />
                        </div>
                        <Typography className={classes.headerDescription}>
                            Front End Developer
                        </Typography>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </React.Fragment>
    );
}
