import React from 'react';
import classes from './app.module.scss';
import Header from './components/Header/Header';
import HeroBox from './components/HeroBox/HeroBox';

const App = () => {
	return (
		<div className={classes.appContainer}>
			<Header />
			<div className={classes.appContent}>
				<HeroBox />
			</div>
		</div>
	);
};

export default App;
