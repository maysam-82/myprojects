import React from 'react';
import classes from './sliderItem.module.scss';

const SliderItem = ({ item, isActive, wasActive }) => {
	let sliderItemClass = [classes.sliderItem];
	if (isActive) sliderItemClass = [...sliderItemClass, classes.sliderItemActive];
	if (wasActive) sliderItemClass = [...sliderItemClass, classes.sliderItemWasActive];
	return (
		<li className={sliderItemClass.join(' ')}>
			<div className={classes.itemContainerLeft}>{item.title}</div>
			<div className={classes.itemContainerRight}>{item.id}</div>
		</li>
	);
};

export default SliderItem;
