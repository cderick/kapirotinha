import React from 'react';
import PropTypes from 'prop-types';
import s from './AboutMe.scss';
import squareCat from '../../../../static/cat.jpg';

class AboutMe extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			finalProduct: this.props.finalProduct ? this.props.finalProduct : undefined,
		};
	}

	render() {
		return (
			<div className={`container ${s.containerBackground}`}>
				<div className="row h-100">
					<div className="col my-auto text-center">
						<h2 className="h1 mb-5">Who is Aleksandra Spadlo</h2>
						<hr />
						<h3 className="h4 mt-5">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</h3>
					</div>
					<div className="col my-auto text-center">
						<img width="330" className="rounded-circle" src={squareCat} />
					</div>
				</div>
			</div>
		)
	}
}

export default AboutMe;
