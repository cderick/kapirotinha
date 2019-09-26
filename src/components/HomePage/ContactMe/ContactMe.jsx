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
				<div className={`row pt-5 pb-5 h-100 ${s.clearDisplay}`}>
					<div className={`${s.paddingNoneSm} col my-auto text-center pl-0`}>
						<h2 className="h1 mb-3">{contactMe && contactMe.title && contactMe.title}</h2>
						<hr />
						<h3 className="h4 mt-3"><a className={s.contactmeLinks} href={`tel:${contactMe && contactMe.phoneNumer && contactMe.phoneNumer.trim()}`}><i className="fas fa-phone"></i> &nbsp; {contactMe && contactMe.phoneNumer && contactMe.phoneNumer}</a></h3>
						<h3 className="h4"><a className={s.contactmeLinks} href={`mailto:${contactMe && contactMe.emailAddress && contactMe.emailAddress}`}><i className="fas fa-envelope-open-text"></i> &nbsp; {contactMe && contactMe.emailAddress && contactMe.emailAddress}</a></h3>
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
												<i className={`text-light ${s.iconHover} ${cv.icon}`}></i>
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
