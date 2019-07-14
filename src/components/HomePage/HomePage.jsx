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
		};
		this.navigation = this.navigation.bind(this);
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
			heroBanner: conversao.heroBanner,
			aboutMe: conversao.aboutMe,
			myWorks: conversao.myWorks,
			contactMe: conversao.contactMe,
		});
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
				<Navigation navigation={this.navigation} />
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
