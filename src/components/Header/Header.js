import React from 'react';
import classes from './header.module.scss';
import logo from '../../assets/img/logo_svg.svg';

export default function Header() {
	return (
		<div className={classes.headerContainer}>
			<h3 className={classes.headerTitle}>Maysam Abolghasemi</h3>
			<div className={classes.logoContainer}>
				<img className={classes.logo} src={logo} alt="projects-logo" />
			</div>
			<h3 className={classes.headerDescription}>Front End Developer</h3>
		</div>
	);
}
