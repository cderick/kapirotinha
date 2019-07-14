import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation/Navigation';
import HeroBanner from './HeroBanner/HeroBanner';
import AboutMe from './AboutMe/AboutMe';
import MyWorks from './MyWorks/MyWorks';
import ContactMe from './ContactMe/ContactMe';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dynamicTab: undefined,
			heroBanner: undefined,
			aboutMe: undefined,
			contactMe: undefined,
			myWorks: undefined,
			navItems: undefined,
		};
	}

	componentDidMount(){
		const { content } = this.props.retrievedObjet;
		let conversao = atob(content);
		if (conversao.slice(0,1) == '"') {
			conversao = JSON.parse(conversao.slice(1,-1));
		} else {
			conversao = JSON.parse(conversao);
		}
		this.setState({
			navItems: conversao.navigation,
			heroBanner: conversao.heroBanner,
			aboutMe: conversao.aboutMe,
			myWorks: conversao.myWorks,
			contactMe: conversao.contactMe,
		});
	}
	
	render() {
		return (
			<section>
				<Navigation navItems={this.state.navItems} />
				<HeroBanner heroBanner={this.state.heroBanner} />
				<AboutMe aboutMe={this.state.aboutMe} />
				<MyWorks myWorks={this.state.myWorks} />
				<ContactMe contactMe={this.state.contactMe} />
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
