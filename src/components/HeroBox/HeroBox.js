import { makeStyles, Paper, Typography } from '@material-ui/core';
import heroImage from '../../assets/img/hero.png';
import React from 'react';

const useStyles = makeStyles(
    ({
        palette: {
            common: { black, body },
        },
        shape: { borderRadius },
        breakpoints,
    }) => ({
        heroBoxContainer: {
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '25rem',
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 1rem',
            [breakpoints.up('md')]: {
                display: 'flex',
            },
        },
        heroBoxTitle: {
            padding: '0.625rem',
            color: black,
            fontWeight: 700,
            backgroundColor: body,
            opacity: 0.6,
            borderRadius: borderRadius,
        },
    })
);

const HeroBox = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.heroBoxContainer}>
            <Typography variant="h4" className={classes.heroBoxTitle}>
                Welcome to Maysam Abolghasemi's Dev. Website
            </Typography>
        </Paper>
    );
};

export default HeroBox;
