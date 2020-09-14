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
            <div className={classes.itemTitle}>Project Title:</div>
            <h4 className={classes.itemTitleDescription}>{title}</h4>
            <div className={classes.itemTitle}>Technologies:</div>
            <ul className={classes.items}>{renderTechnologies}</ul>
            <div className={classes.urlContainer}>
                <div className={classes.urlLabel}>URL:</div>
                <a href={url}>{url}</a>
            </div>
        </li>
    );
};

export default BoardItem;
