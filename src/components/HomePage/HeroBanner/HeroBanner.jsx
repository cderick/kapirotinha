import React from 'react';
import PropTypes from 'prop-types';
import s from './HeroBanner.scss';

class HeroBanner extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { heroBanner } = this.props;
		return (
			<div id="homePage" className={`container-fluid pt-5 pb-5 ${s.containerBackground}`}>
				<div className="row pt-5 pb-5 h-100">
					<div className="col pt-5 pb-5 my-auto text-center">
						<h1 className="display-4">{heroBanner && heroBanner.title ? heroBanner.title : ''}</h1>
						<hr />
						<h2 className="display-5 mb-0">{heroBanner && heroBanner.subTitle ? heroBanner.subTitle : ''}</h2>
					</div>
				</div>
			</div>
		)
	}
}

HeroBanner.propTypes = {
	heroBanner: PropTypes.objectOf(PropTypes.any),
};

HeroBanner.defaultProps = {
	heroBanner: null,
};

export default HeroBanner;
