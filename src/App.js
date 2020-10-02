import React from 'react';
import Header from './components/Header';
import HeroBox from './components/HeroBox';
import { projects } from './data/projects';
import Footer from './components/Footer';
import Board from './components/Board';
import theme from './styles/theme';
import { ThemeProvider, Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    appContainer: {
        ...theme.mixins.toolbar,
        marginBottom: '0.625rem',
    },
}));

const App = () => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <div className={classes.appContainer} />
            <Container maxWidth="lg">
                <div className={classes.appContent} />
                <div>
                    <HeroBox />
                    {/*TODO: Complete Slider <Slider items={projects} /> */}
                    <Board items={projects} />
                </div>
                <Footer items={projects} />
            </Container>
        </ThemeProvider>
    );
};

export default App;
