import React from 'react';
import classes from './app.module.scss';
import Header from './components/Header';
import HeroBox from './components/HeroBox';
// import Slider from './components/Slider';
import { projects } from './data/projects';
import Footer from './components/Footer';
import Board from './components/Board';

const App = () => {
    return (
        <div className={classes.appContainer}>
            <Header />
            <div className={classes.appContent}>
                <HeroBox />
                {/*TODO: Complete Slider <Slider items={projects} /> */}
                <Board items={projects} />
            </div>
            <Footer items={projects} />
        </div>
    );
};

export default App;
