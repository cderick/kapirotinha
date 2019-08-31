import React from 'react';
import PropTypes from 'prop-types';
import s from './MyWorks.scss';
import artWorks from '../../../../static/artworks.png';
import webProtos from '../../../../static/webprotos.png';
import PopupContent from './PopupContent/PopupContent';

class MyWorks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			overlayActive: false,
			popUpcontent: undefined,
		}
		this.handlePopupOverlay = this.handlePopupOverlay.bind(this);
		this.equalHeights = this.equalHeights.bind(this);
	}

	handlePopupOverlay() {
		this.setState({
			overlayActive: !this.state.overlayActive,
		}, () => {
			const body = document.querySelector('body');
			if (this.state.overlayActive) {
				body.style.overflow = 'hidden';
			} else {
				body.style.overflow = 'initial';
			}
		});
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.equalHeights);
	}

	componentDidMount() {
		if (window.outerWidth && window.outerWidth > 499) {
			window.addEventListener('resize', this.equalHeights);
			setTimeout(() => {
				this.equalHeights();
			}, 600);
		}
	}

	equalHeights() {
		let findClass = document.getElementsByClassName('overflow-hidden');
		let tallest = 0;
		for (let i = 0; i < findClass.length; i++) {
			const ele = findClass[i];
			const eleHeight = ele.offsetHeight;
			tallest = (eleHeight > tallest ? eleHeight : tallest);
		}
		for (let i = 0; i < findClass.length; i++) {
			findClass[i].style.height = `${tallest}px`;
		}
	}

	render() {
		const { myWorks, mainWorks } = this.props;
		const { overlayActive } = this.state;
		console.log(mainWorks)
		const cv = undefined
		return (
			<div id="myWorks" className={`container-fluid ${s.containerBackground}`}>
				{mainWorks && mainWorks.length &&
					<section className="m-4">
						{mainWorks.map((wb, indwb) =>
							<section key={`${wb.mainTitle}${indwb}`}>
								<div className="row">
									<div className="col">
										<h2 className={`h1 mb-2 ${wb.classTitle && wb.classTitle}`}>{wb.mainTitle}</h2>
										<hr className={`pb-0 ${wb.rightHr ? s.rightHr : `mb-3 ${s.hrLeft}`}`} />
										<h4 className={`pb-4 ${s.h4Small} ${wb.classDescrip && wb.classDescrip}`}>{wb.descritpion}</h4>
									</div>
								</div>
								{mainWorks[0].allWorks[1] && mainWorks[0].allWorks[1].wNdescription && indwb !== 1 &&
								<div className="row mt-4">
									<div style={mainWorks[0].allWorks[1] && mainWorks[0].allWorks[1].wNColStyle}>
										<div dangerouslySetInnerHTML={{ __html: mainWorks[0].allWorks[1] && mainWorks[0].allWorks[1].wNdescription }} />
									</div>
								</div>}
								{wb.allWorks && wb.allWorks.map((cv, ind) =>
									<div key={`collapse${ind}`} id={`collapse${cv.uniQueId}`}>
										<div className={s.contentPopup}>
											<img src={require(`../../../../static/${cv.bannerImage}`)} alt={cv.bannerImage}
												className={s.resizeImage} />
											<div className={`row mt-4 ${s.clearDisplay}`}>
												<div className="col" style={cv.styleColPallete}>
													<h2 className="text-center">{cv.collorPallete.mainTitle}</h2>
													{cv.collorPallete.description ?
														<div className="pt-2" dangerouslySetInnerHTML={{ __html: cv.collorPallete.description }} /> : ''}
													<div className={`row pt-4 ${s.textCenterSmall} ${s.clearDisplay}`}>
														<div className="col">
															{cv.collorPallete.left &&
																cv.collorPallete.left.map((cpl, indcpl) =>
																	<div key={`left${cpl.name}${indcpl}`} className="pb-3">
																		<div className={s.colorRounded}
																			style={{ border: `1px solid ${cpl.color === '#FFFFFF' ? '#000' : cpl.color}`, backgroundColor: `${cpl.color}` }}>
																			&nbsp;</div>
																		<p className="pt-3 mb-0">{cpl.color}</p>
																		<p>{cpl.name}</p>
																	</div>
																)}
														</div>
														<div className="col">
															{cv.collorPallete.right &&
																cv.collorPallete.right.map((cpr, indcpr) =>
																	<div key={`right${cpr.name}${indcpr}`} className="pb-3">
																		<div className={s.colorRounded}
																			style={{ border: `1px solid ${cpr.color === '#FFFFFF' ? '#000' : cpr.color}`, backgroundColor: `${cpr.color}` }}>
																			&nbsp;</div>
																		<p className="pt-3 mb-0">{cpr.color}</p>
																		<p>{cpr.name}</p>
																	</div>
																)}
														</div>
													</div>
												</div>
												<div className="col" style={cv.styleColTypography}>
													<h2 className="text-center">{cv.typoGraphy.mainTitle}</h2>
													{cv.typoGraphy.description ?
														<div className="pt-2" dangerouslySetInnerHTML={{ __html: cv.typoGraphy.description }} /> : ''}
													<div className={`row ${s.clearDisplay}`}>
														<div className="col">
															{cv.typoGraphy.left &&
																cv.typoGraphy.left.map((ctl, indctl) =>
																	<div key={`left${ctl.name}${indctl}`} className="pb-3">
																		<h2 className={ctl.classes}>{ctl.type}</h2>
																		<p className={ctl.sizeClass}>{ctl.size}</p>
																		<p>{ctl.name}</p>
																	</div>
																)}
														</div>
														<div className="col">
															{cv.typoGraphy.right &&
																cv.typoGraphy.right.map((ctr, indctr) =>
																	<div key={`right${ctr.name}${indctr}`} className="pb-3">
																		<h2 className={ctr.classes}>{ctr.type}</h2>
																		<p className={ctr.sizeClass}>{ctr.size}</p>
																		<p>{ctr.name}</p>
																	</div>
																)}
														</div>
													</div>
												</div>
											</div>
											{cv.bannerSections &&
												cv.bannerSections.map((bs, indbs) =>
													<div key={`${bs.mainTitle}${indbs}`} className="row mt-4 pb-5"
														style={{ backgroundColor: `${bs.background ? bs.background : '#fff'}` }}>
														<div className="col">
															<h2 className="mb-5 mt-5 text-center h1">{bs.mainTitle}</h2>
															<img src={require(`../../../../static/${bs.images}`)} alt={bs.images} className={s.resizeImage} />
														</div>
													</div>
												)}
										</div>
									</div>
								)}
							</section>
						)}
					</section>
				}
			</div>
		)
	}
}

export default MyWorks;
