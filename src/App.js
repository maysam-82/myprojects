import React from 'react';
import classes from './app.module.scss';
import Header from './components/Header/Header';

const App = () => {
	return (
		<div className={classes.appContainer}>
			<Header />
		</div>
	);
};

export default App;
