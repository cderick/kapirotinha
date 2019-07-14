import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactMe.scss';

class ContactMe extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { contactMe } = this.props;
		return (
			<div className={`container ${s.containerBackground}`}>
				<div className="row h-100">
					<div className="col my-auto text-center">
						<h2 className="h1 mb-3">{contactMe && contactMe.title && contactMe.title}</h2>
						<hr />
						<h3 className="h4 mt-3">{contactMe && contactMe.phoneNumer && contactMe.phoneNumer}</h3>
						<h3 className="h4">{contactMe && contactMe.emailAddress && contactMe.emailAddress}</h3>
					</div>
					<div className="col my-auto text-center">
						<h2 className="h1 mb-3">{contactMe && contactMe.socialTitle && contactMe.socialTitle}</h2>
						<hr />
						<div className="row">
							{contactMe && contactMe.socialNetwork &&
								contactMe.socialNetwork.map((cv, ind) =>
									<div key={`socialId${ind}`} className="col mt-3">
										<p className="h1">
											<a href={cv.url} target="_blank">
												<i className={`text-dark ${cv.icon}`}></i>
											</a>
										</p>
									</div>
								)}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ContactMe;
