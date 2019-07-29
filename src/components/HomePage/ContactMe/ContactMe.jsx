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
			<div id="contactMe" className={`container-fluid ${s.containerBackground}`}>
				<div className={`row h-100 ${s.clearDisplay}`}>
					<div className={`${s.paddingNoneSm} col my-auto text-center pl-0`}>
						<h2 className="h1 mb-3">{contactMe && contactMe.title && contactMe.title}</h2>
						<hr />
						<h3 className="h4 mt-3">{contactMe && contactMe.phoneNumer && contactMe.phoneNumer}</h3>
						<h3 className="h4">{contactMe && contactMe.emailAddress && contactMe.emailAddress}</h3>
					</div>
					<div className={`${s.paddingNoneSm} col my-auto text-center pr-0`}>
						<h2 className="h1 mb-3">{contactMe && contactMe.socialTitle && contactMe.socialTitle}</h2>
						<hr className={s.rightHr}/>
						<div className={`row pt-3 ${s.clearfix}`}>
							{contactMe && contactMe.socialNetwork &&
								contactMe.socialNetwork.map((cv, ind) =>
									<div key={`socialId${ind}`} className="col p-0 mt-3">
										<p className="h1">
											<a href={cv.url} target="_blank">
												<i className={`text-light ${cv.icon}`}></i>
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
