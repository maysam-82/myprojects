import React from 'react';
import classes from './heroBox.module.scss';

const HeroBox = ({ items }) => {
	return (
		<div className={classes.heroBoxContainer}>
			<h1>Welcome to Maysam Abolghasemi's sample projects</h1>
		</div>
	);
};

export default HeroBox;
