import React from 'react';
import PropTypes from 'prop-types';
import s from './AboutMe.scss';
import squareCat from '../../../../static/cat.jpg';

class AboutMe extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { aboutMe } = this.props;
		return (
			<div id="aboutMe" className={`container ${s.containerBackground}`}>
				<div className="row h-100">
					<div className="col my-auto text-center">
						<h2 className="h1 mb-5">{aboutMe && aboutMe.title && aboutMe.title}</h2>
						<hr />
						<h3 className="h4 mt-5">{aboutMe && aboutMe.subTitle && aboutMe.subTitle}</h3>
					</div>
					<div className="col my-auto text-center">
						<img width="330" className="rounded-circle" src={squareCat} />
					</div>
				</div>
			</div>
		)
	}
}

AboutMe.propTypes = {
	aboutMe: PropTypes.objectOf(PropTypes.any),
};

AboutMe.defaultProps = {
	aboutMe: null,
};

export default AboutMe;
