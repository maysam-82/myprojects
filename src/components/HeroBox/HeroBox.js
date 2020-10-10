import React from 'react';
import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import heroImage from '../../assets/img/hero.png';
import animationData from '../../assets/animation/json/logo.json';
import Logo from '../Logo/Logo';

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
            textAlign: 'center',
        },
        logoContainer: {
            marginTop: '1rem',
        },
    })
);

const HeroBox = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.heroBoxContainer}>
            <Grid container direction="column" alignItems="center">
                <Grid item md={12}>
                    <Typography variant="h4" className={classes.heroBoxTitle}>
                        Welcome to Maysam Abolghasemi's Dev. Website
                    </Typography>
                </Grid>
                <Grid item className={classes.logoContainer} md={12}>
                    <Logo
                        width={64}
                        height={64}
                        hasAutoPlay={true}
                        hasLoop={false}
                        isPaused={false}
                        isStopped={false}
                        animationData={animationData}
                    />
                </Grid>
            </Grid>
        </Paper>
    );
};

export default HeroBox;
