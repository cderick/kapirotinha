import React from 'react';
import PropTypes from 'prop-types';
import s from './Navigation.scss';

class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toggleMenu: false,
		}
		this.toggleNav = this.toggleNav.bind(this);
		this.handletoggleMenu = this.handletoggleMenu.bind(this);
	}

	toggleNav(e) {
		if (e) {
			const substract = document.querySelector('#myTopnav').offsetHeight;
			const target = document.querySelector(`#${e}`).offsetTop;
			window.scrollTo({
				top: target - substract,
				behavior: 'smooth',
			});
			this.setState({
				toggleMenu: !this.state.toggleMenu,
			});
		}
	}

	handletoggleMenu(){
		this.setState({
			toggleMenu: !this.state.toggleMenu,
		});
	}

	render() {
		const { navItems } = this.props;
		return (
			<nav className={s.topnav} id="myTopnav">
				{navItems && navItems.length &&
				navItems.map((cv, ind) => 
					<a key={`key-${ind}`} className={`${cv.classes && cv.classes} ${this.state.toggleMenu ? s.showFeature : ''} ${ind === 0 && s.stencil}`} id={cv.id} onClick={() => { this.toggleNav(cv.target); }} href="javascript:void(0)">{cv.title}</a>
				)}
				<i onClick={() => this.handletoggleMenu()} className={`${s.menuBurguer} fas fa-bars`}></i>
			</nav>
		);
	}
}

Navigation.propTypes = {
	navigation: PropTypes.func,
};

export default Navigation;
