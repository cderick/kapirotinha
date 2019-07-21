import React from 'react';
import PropTypes from 'prop-types';
import s from './MyWorks.scss';
import squareCat from '../../../../static/cat.jpg';

class MyWorks extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props.myWorks)
		return (
			<div id="myWorks" className={`container-fluid ${s.containerBackground}`}>
				<div className="row">
					<div className="col text-center">
						<h3 className="h1 pt-4 pb-3">My works</h3>
						<hr />
					</div>
				</div>
				<div className="row">
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

export default MyWorks;
