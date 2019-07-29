import React from 'react';
import PropTypes from 'prop-types';
import s from './MyWorks.scss';
import artWorks from '../../../../static/artworks.png';
import webProtos from '../../../../static/webprotos.png';

class MyWorks extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { myWorks } = this.props;
		return (
			<div id="myWorks" className={`container-fluid ${s.containerBackground}`}>
				<div className="row">
					<div className="col text-center">
						<h3 className="h1 pt-4 pb-3">{myWorks && myWorks.title}</h3>
					</div>
				</div>
				<div className="row">
					{myWorks && myWorks.cards &&
						myWorks.cards.map((cv, ind) =>
							<div key={`socialId${ind}`} className="col p-0 my-auto text-center">
								<div className={s.myCard} onClick={() => console.log(cv.target)}>
									<img className={s.imgResize} src={cv.target === 'web' ? webProtos : artWorks} />
									<div className="p-4 overflow-hidden">
										<h2 className="h2 pb-3">{cv.cardTitle && cv.cardTitle}</h2>
										<p>{cv.cardDescrip}</p>
										<div className={s.fakeButton}>{cv.buttonDescrip && cv.buttonDescrip} <i className="fas fa-chevron-right"></i></div>
									</div>
								</div>
							</div>
						)}
				</div>
			</div>
		)
	}
}

export default MyWorks;
