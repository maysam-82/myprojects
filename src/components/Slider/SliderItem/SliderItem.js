import React from 'react';
import classes from './sliderItem.module.scss';

const SliderItem = ({ item, isActive, wasActive }) => {
	const { title, imageUrl, url, technologies, testingLibraries } = item || {};
	let sliderItemClass = [classes.sliderItem];
	if (isActive) sliderItemClass = [...sliderItemClass, classes.sliderItemActive];
	if (wasActive) sliderItemClass = [...sliderItemClass, classes.sliderItemWasActive];

	const renderTestingLibraries = testingLibraries ? (
		<ul className={classes.items}>
			{testingLibraries.map(({ testId, testLibraryName }) => (
				<li className={classes.item} key={testId}>
					{testLibraryName}
				</li>
			))}
		</ul>
	) : (
		<div className={classes.items}>-</div>
	);
	const renderTechnologies = technologies.map(({ techId, name }) => (
		<li className={classes.item} key={techId}>
			{name}
		</li>
	));
	return (
		<li className={sliderItemClass.join(' ')}>
			<div className={classes.itemContainerLeft}>
				<div className={classes.itemTitle}>Project title:</div>
				<h4 className={classes.itemTitleDescription}>{title}</h4>
				<div className={classes.itemTitle}>Technologies:</div>
				<ul className={classes.items}>{renderTechnologies}</ul>
				<div className={classes.itemTitle}>Testing libraries:</div>
				{renderTestingLibraries}

				<div className={classes.itemTitle}>URL:</div>
				<a href={url}>{url}</a>
			</div>
			<div className={classes.itemContainerRight}>
				<img src={imageUrl} alt={title} />
			</div>
		</li>
	);
};

export default SliderItem;
