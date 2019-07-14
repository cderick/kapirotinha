import React from 'react';
import PropTypes from 'prop-types';
import s from './HeroBanner.scss';

class HeroBanner extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			finalProduct: this.props.finalProduct ? this.props.finalProduct : undefined,
		};
	}

	render() {
		return (
			<div className={`container-fluid ${s.containerBackground}`}>
				<div className="row h-100">
					<div className="col my-auto text-center">
						<h1 className="display-4">ALEKSANDRA SPADLO</h1>
						<h2 className="display-5">Portfolio</h2>
					</div>
				</div>
			</div>
		)
	}
}

export default HeroBanner;
