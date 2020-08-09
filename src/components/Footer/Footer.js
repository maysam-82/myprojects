import React from 'react';
import classes from './footer.module.scss';

const Footer = ({ items }) => {
	const renderItemsLink = items.map(({ id, title, url }) => (
		<li className={classes.projectLink} key={id}>
			<a href={url}>{title}</a>
		</li>
	));
	return (
		<div className={classes.footerContainer}>
			<div className={classes.profile}>
				<a href="https://github.com/maysam-82">My Github Profile</a>
			</div>
			<ul className={classes.projectsLink}>{renderItemsLink}</ul>
		</div>
	);
};

export default Footer;
