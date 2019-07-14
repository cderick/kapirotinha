import React from 'react';
import PropTypes from 'prop-types';
import s from './Navigation.scss';

class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.toggleNav = this.toggleNav.bind(this);
	}

	toggleNav(e) {
		if (e && e.target) {
			this.props.navigation(e.target.id);			
		}
	}

	render() {
		return (
			<nav className={s.topnav} id="myTopnav">
				<a id="home" className={`float-left`} onClick={(e) => { this.toggleNav(e); }} href="javascript:void(0)">ALEKSANDRA SPADLO</a>
				<a id="contact" onClick={(e) => { this.toggleNav(e); }} href="javascript:void(0)">Contact</a>
				<a id="works" onClick={(e) => { this.toggleNav(e); }} href="javascript:void(0)">My works</a>
				<a id="about" onClick={(e) => { this.toggleNav(e); }} href="javascript:void(0)">About</a>
			</nav>
		);
	}
}

Navigation.propTypes = {
	navigation: PropTypes.func,
};

export default Navigation;
