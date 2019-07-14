import React from 'react';
import PropTypes from 'prop-types';
import s from './HomePage.scss';
import Navigation from './Navigation/Navigation';
import HeroBanner from './HeroBanner/HeroBanner';
import AboutMe from './AboutMe/AboutMe';
import MyWorks from './MyWorks/MyWorks';
import ContactMe from './ContactMe/ContactMe';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			retrievedObjet: [],
		};
		this.navigation = this.navigation.bind(this);
	}

	navigation(id) {
		if (id) {
			this.setState({
				dynamicTab: id,
			});
		}
	}
	
	render() {
		return (
			<section>
				<Navigation navigation={this.navigation}/>
				<HeroBanner />
				<AboutMe />
				<MyWorks />
				<ContactMe />
			</section>
		);

	}
}

HomePage.propTypes = {
	retrievedObjet: PropTypes.objectOf(PropTypes.any),
};

HomePage.defaultProps = {
	retrievedObjet: [],
};

export default HomePage;
