import {
    Chip,
    Grid,
    Link,
    List,
    ListItem,
    makeStyles,
} from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import React from 'react';

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
            display: 'flex',
            justifyContent: 'center',
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
            color: secondary,
            fontSize: '1.5rem',
            backgroundColor: white,
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
            <Grid item md={3} xs={12}>
                <Link
                    href="https://github.com/maysam-82"
                    className={classes.profile}
                    underline="none"
                >
                    <Chip
                        label="My Github"
                        icon={<FaceIcon className={classes.iconGithub} />}
                        clickable
                        className={classes.listItemGithub}
                    />
                </Link>
            </Grid>
            <Grid item md={9} className={classes.projectLinksContainer}>
                <List className={classes.projectsLink}>{renderItemsLink}</List>
            </Grid>
        </footer>
    );
};

export default Footer;
