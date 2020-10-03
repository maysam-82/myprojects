import {
    Card,
    CardActions,
    CardContent,
    Grid,
    Link,
    List,
    ListItem,
    makeStyles,
    Typography,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(
    ({
        palette: {
            common: { red, black },
        },
        border,
    }) => ({
        boardItem: {
            width: 'calc(50% - 0.3125rem)',
            marginBottom: '0.625rem',
        },
        boardCard: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
        },
        label: {
            color: red,
            opacity: 0.8,
            margin: 0,
            border,
        },
        title: {
            color: black,
            fontWeight: 700,
            padding: '0.625rem 0',
            marginBottom: '0.625rem',
            borderBottom: border.border,
            borderBottomColor: border.borderColor,
        },
        urlContainer: {
            borderTop: border.border,
            borderTopColor: border.borderColor,
            marginTop: 'auto',
            margin: '0 1rem',
            padding: '0.625rem 0',
        },
        urlLinkButton: {
            textTransform: 'lowercase',
            '&:hover': {
                textDecoration: 'none',
                backgroundColor: 'transparent',
            },
        },
        boardCardContent: {
            marginBottom: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        item: {
            height: '100%',
        },
    })
);

const BoardItem = ({ item }) => {
    const { title, url, technologies } = item || {};
    const classes = useStyles();

    const renderTechnologies = technologies.map(({ techId, name }) => (
        <ListItem divider key={techId}>
            {name}
        </ListItem>
    ));

    return (
        <Grid item xs={12} md={6} lg={4}>
            <ListItem className={classes.item}>
                <Card className={classes.boardCard}>
                    <CardContent className={classes.boardCardContent}>
                        <Typography
                            className={classes.label}
                            color="textSecondary"
                            gutterBottom
                        >
                            Project title:
                        </Typography>
                        <Typography
                            variant="body2"
                            component="p"
                            className={classes.title}
                        >
                            {title}
                        </Typography>

                        <Typography
                            className={classes.label}
                            color="textSecondary"
                        >
                            Technologies:
                        </Typography>
                        <List>{renderTechnologies}</List>
                    </CardContent>
                    <CardActions className={classes.urlContainer}>
                        <Link
                            href={url}
                            className={classes.urlLinkButton}
                            color="secondary"
                        >
                            {url}
                        </Link>
                    </CardActions>
                </Card>
            </ListItem>
        </Grid>
    );
};

export default BoardItem;
