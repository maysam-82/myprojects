import React from 'react';
import Header from './components/Header';
import HeroBox from './components/HeroBox';
import { projects } from './data/projects';
import Footer from './components/Footer';
import Board from './components/Board';
import theme from './styles/theme';
import { ThemeProvider, Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    appTopSpace: {
        ...theme.mixins.toolbar,
        marginBottom: '0.625rem',
    },
    appBottomSpace: {
        height: '6rem',
        [theme.breakpoints.up('md')]: {
            height: 0,
        },
    },
}));

const App = () => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <div className={classes.appTopSpace} />
            <Container maxWidth="lg">
                <div className={classes.appContent}>
                    <HeroBox />
                    {/*TODO: Complete Slider <Slider items={projects} /> */}
                    <Board items={projects} />
                </div>
            </Container>
            <div className={classes.appBottomSpace} />
            <Footer items={projects} />
        </ThemeProvider>
    );
};

export default App;
