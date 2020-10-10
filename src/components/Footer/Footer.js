import React from 'react';
import {
    Chip,
    Grid,
    Link,
    List,
    ListItem,
    makeStyles,
    Paper,
    Typography,
} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import animationData from '../../assets/animation/json/logo.json';
import Logo from '../Logo/Logo';

const useStyles = makeStyles((theme) => {
    const {
        palette: {
            common: { secondary, white },
        },
        typography,
    } = theme;

    return {
        footerContainer: {
            padding: '1rem',
            backgroundColor: secondary,
            width: '100%',
            position: 'fixed',
            top: 'auto',
            bottom: 0,

            [theme.breakpoints.up('md')]: {
                padding: 0,
                position: 'relative',
            },
        },
        projectLinksContainer: {
            display: 'none',
            border: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'block',
                borderLeft: '0.0625rem solid',
                borderLeftColor: white,
            },
        },
        listItemGithub: {
            color: theme.palette.common.white,
            fontWeight: 700,
            textDecoration: 'none',
            fontSize: '1.5rem',
            height: '3rem',
            display: 'flex',
            alignItems: 'center',
            borderRadius: theme.shape.borderRadius,
            textAlign: 'left',
            [theme.breakpoints.up('md')]: {
                textAlign: 'center',
            },
        },

        profile: {
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            fontSize: typography.h5.fontSize,
            color: white,
        },
        projectsLink: {
            display: 'none',

            [theme.breakpoints.up('md')]: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                '&::after': {
                    content: "''",
                    flex: 'auto',
                    width: 'calc(20% - 0.625rem)',
                },
            },
        },
        projectLink: {
            padding: '0.625rem',
            width: 'auto',
            color: white,
        },
        iconGithub: {
            color: secondary,
        },
        iconLink: {
            color: white,
        },
        listItemLink: {
            color: white,
            borderColor: white,
        },
        logoAnimation: {
            display: 'flex',
            justifyContent: 'flex-end',

            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
        githubLinkContainer: {
            display: 'flex',
            justifyContent: 'flex-start',
            [theme.breakpoints.up('md')]: {
                justifyContent: 'center',
            },

            alignItems: 'center',
        },
    };
});

const Footer = ({ items }) => {
    const classes = useStyles();

    const renderItemsLink = items.map(({ id, title, url }) => (
        <ListItem
            className={classes.projectLink}
            key={id}
            component={Link}
            href={url}
        >
            <Chip
                label={title}
                icon={<CheckCircleIcon className={classes.iconLink} />}
                clickable
                variant="outlined"
                className={classes.listItemLink}
            />
        </ListItem>
    ));
    return (
        <footer className={classes.footerContainer}>
            <Grid container justify="center">
                <Grid
                    item
                    md={3}
                    xs={9}
                    className={classes.githubLinkContainer}
                >
                    <Typography
                        component={'a'}
                        href="https://github.com/maysam-82"
                        className={classes.listItemGithub}
                    >
                        My Github Link
                    </Typography>
                </Grid>
                <Grid item xs={3} className={classes.logoAnimation}>
                    <Paper elevation={0}>
                        <Logo
                            width={64}
                            height={64}
                            hasAutoPlay={true}
                            hasLoop={false}
                            isPaused={false}
                            isStopped={false}
                            animationData={animationData}
                        />
                    </Paper>
                </Grid>
                <Grid item md={9} className={classes.projectLinksContainer}>
                    <List className={classes.projectsLink}>
                        {renderItemsLink}
                    </List>
                </Grid>
            </Grid>
        </footer>
    );
};

export default Footer;
