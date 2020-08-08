import React from 'react';
import classes from './app.module.scss';
import Header from './components/Header';
import HeroBox from './components/HeroBox';
import Slider from './components/Slider/Slider';

const App = () => {
	return (
		<div className={classes.appContainer}>
			<Header />
			<div className={classes.appContent}>
				<HeroBox />
				<Slider />
			</div>
		</div>
	);
};

export default App;
