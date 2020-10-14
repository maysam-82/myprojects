import React, { useState } from 'react';
import Header from './components/Header';
import HeroBox from './components/HeroBox';
import { projects } from './data/projects';
import Footer from './components/Footer';
import Board from './components/Board';
import { ThemeProvider, Container, makeStyles } from '@material-ui/core';
import { setTheme } from './utils/theme';
import ThemeSwitch from './components/ThemeSwitch/ThemeSwitch';

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
    const [isDarkMode, setDarkMode] = useState(false);

    const classes = useStyles();
    return (
        <ThemeProvider theme={setTheme(isDarkMode)}>
            <Header />
            <div className={classes.appTopSpace} />
            <ThemeSwitch
                isDark={isDarkMode}
                changeTheme={() => setDarkMode(!isDarkMode)}
            />
            <Container maxWidth="lg">
                <div className={classes.appContent}>
                    <HeroBox />
                    <Board items={projects} />
                </div>
            </Container>
            <div className={classes.appBottomSpace} />
            <Footer items={projects} />
        </ThemeProvider>
    );
};

export default App;
