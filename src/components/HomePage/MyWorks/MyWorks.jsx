import React from 'react';
import PropTypes from 'prop-types';
import s from './MyWorks.scss';
import squareCat from '../../../../static/cat.jpg';

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
					<div className="col my-auto text-center">
						<div className={s.myCard}>
							hey
						</div>
					</div>
					<div className="col my-auto text-center">
					<div className={s.myCard}>
							hey
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default MyWorks;
