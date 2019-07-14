import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactMe.scss';

class ContactMe extends React.Component {
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
						<h2 className="h1 mb-3">Contact</h2>
						<hr />
						<h3 className="h4 mt-3">Phone: 00009987890</h3>
						<h3 className="h4">Email: asdasds@sadasa.com</h3>
					</div>
					<div className="col my-auto text-center">
						<h2 className="h1 mb-3">Follow</h2>
						<hr />
						<div className="row">
							<div className="col  mt-3">
								<p className="h1"><a href="https://www.linkedin.com/in/alexandra-spadlo/" target="_blank"><i className="text-dark fab fa-linkedin"></i></a></p>
							</div>
							<div className="col mt-3">
								<p className="h1"><a href="https://www.instagram.com/kapirotinia/" target="_blank"><i className="fab text-dark fa-instagram"></i></a></p>
							</div>
							<div className="col  mt-3">
								<p className="h1"><a href="https://www.behance.net/" target="_blank"><i className="fab fa-behance-square text-dark"></i></a></p>
							</div>
							<div className="col  mt-3">
								<p className="h1"><a href="https://www.facebook.com/profile.php?id=100001025402417" target="_blank"><i className="fab fa-facebook-square text-dark"></i></a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ContactMe;
