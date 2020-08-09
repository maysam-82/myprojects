import React from 'react';
import classes from './app.module.scss';
import Header from './components/Header';
import HeroBox from './components/HeroBox';
import Slider from './components/Slider';
import { projects } from './data/projects';
import Footer from './components/Footer/Footer';

const App = () => {
	return (
		<div className={classes.appContainer}>
			<Header />
			<div className={classes.appContent}>
				<HeroBox />
				<Slider items={projects} />
			</div>
			<Footer items={projects} />
		</div>
	);
};

export default App;
