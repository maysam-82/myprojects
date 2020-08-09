import React from 'react';
import classes from './boardItem.module.scss';

const BoardItem = ({ item }) => {
	const { title, url, technologies } = item || {};

	const renderTechnologies = technologies.map(({ techId, name }) => (
		<li className={classes.item} key={techId}>
			{name}
		</li>
	));

	return (
		<li className={classes.boardItem} key={item.id}>
			<div className={classes.itemTitle}>Project title:</div>
			<h4 className={classes.itemTitleDescription}>{title}</h4>
			<div className={classes.itemTitle}>Technologies:</div>
			<ul className={classes.items}>{renderTechnologies}</ul>
			<div className={classes.itemTitle}>URL:</div>
			<a href={url}>{url}</a>
		</li>
	);
};

export default BoardItem;
