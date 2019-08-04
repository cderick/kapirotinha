import React from 'react';
import PropTypes from 'prop-types';
import s from './PopupContent.scss';
import eventiBanner from '../../../../../static/eventi-banner.png';
import eventPage from '../../../../../static/eventi_main_page.png';
import eventiLayout from '../../../../../static/eventi_layout.png';
import eventiSpacing from '../../../../../static/eventi_spacing.png';

class PopupContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popUpcontent: this.props.popUpcontent === 'fashion' ? 'fashion' : 'web',
            targetCollapse: undefined,
            targetOn: undefined,
        }
        this.cumulativeOffset = this.cumulativeOffset.bind(this);
    }

    cumulativeOffset(element) {
        var top = 0, left = 0;
        do {
            top += element.offsetTop  || 0;
            left += element.offsetLeft || 0;
            element = element.offsetParent;
        } while(element);
    
        return {
            top: top,
            left: left
        };
    }

    scroolHandle(id){
        const myElement = document.querySelector(`#${id}`);
        const accordIon = document.querySelector('#accordion');
        const correctOffset = this.cumulativeOffset(myElement);
        accordIon.scrollTo({
            top: correctOffset.top,
            behavior: 'smooth',
        });
    }

    render() {
        const { popUpcontent } = this.props;
        const { targetCollapse, targetOn } = this.state;
        return (
            <div id="pop-up-one" className={`${s.popUpOverlay} ${s.popUpOverlaytarget}`}>
                <div className={s.popUp} id="accordion">
                    <a className="close" onClick={() => this.props.handlePopupOverlay()} href="javascript:void(0);">&times;</a>
                    <h1 className="mb-2">{popUpcontent === 'fashion' ? 'Fashion Caralho' : 'WEBSITES'}</h1>
                    <hr className="mb-3 pb-0" />
                    <h4 className="pb-4">Ethical messenger bag waistcoat raclette. Forage scenester af air plant williamsburg. DIY forage tote bag, pinterest tumeric venmo distillery la croix salvia +1 swag.</h4>
                    
                    <div className={`${s.mainComponent} mb-5 ${targetCollapse === 'feijao' && targetOn == 'true' && s.autoHeight}`}>
                        <div id="feijao" className={`${s.bottomContainer} ${targetCollapse  === 'feijao' && targetOn == 'true' && s.positionSmooth}`} onClick={(e) => {
                            const id = e.target.id;
                            const att = e.target.getAttribute('aria-expanded');
                            this.setState({
                                targetCollapse: id,
                                targetOn: att
                            }, () => {
                                setTimeout(() => {
                                    if(this.state.targetOn == 'true'){
                                        this.scroolHandle(id);
                                    }
                                }, 400);
                            });
                        }} data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            <h2 className="mb-0 pl-4 float-left">EVENTI</h2>
                            <h2 className="mb-0 pr-4 float-right">Click to expand <i className="fas fa-chevron-circle-down"></i></h2>
                        </div>
                        <div className="collapse" data-parent="#accordion" id="collapseExample">
                            <div className={s.contentPopup}>
                                <img src={eventiBanner} className={s.resizeImage} />
                                <div className="row mt-4">
                                    <div className="col">
                                        <h2 className="text-center">Collor Pallete:</h2>
                                        <div className="row">
                                            <div className="col pt-4">
                                                <div className="pb-3">
                                                    <div className={s.colorRounded} style={{ border: '1px solid aqua', backgroundColor: 'aqua' }}>&nbsp;</div>
                                                    <p className="pt-3 mb-0">#98c68s</p>
                                                    <p>.eventi-purple-10</p>
                                                </div>
                                                <div className="pb-3">
                                                    <div className={s.colorRounded} style={{ border: '1px solid aqua', backgroundColor: 'aqua' }}>&nbsp;</div>
                                                    <p className="pt-3 mb-0">#98c68s</p>
                                                    <p>.eventi-purple-10</p>
                                                </div>
                                                <div className="pb-3">
                                                    <div className={s.colorRounded} style={{ border: '1px solid aqua', backgroundColor: 'aqua' }}>&nbsp;</div>
                                                    <p className="pt-3 mb-0">#98c68s</p>
                                                    <p>.eventi-purple-10</p>
                                                </div>
                                            </div>
                                            <div className="col pt-4">
                                                <div className="pb-3">
                                                    <div className={s.colorRounded} style={{ border: '1px solid aqua', backgroundColor: 'aqua' }}>&nbsp;</div>
                                                    <p className="pt-3 mb-0">#98c68s</p>
                                                    <p>.eventi-purple-10</p>
                                                </div>
                                                <div className="pb-3">
                                                    <div className={s.colorRounded} style={{ border: '1px solid aqua', backgroundColor: 'aqua' }}>&nbsp;</div>
                                                    <p className="pt-3 mb-0">#98c68s</p>
                                                    <p>.eventi-purple-10</p>
                                                </div>
                                                <div className="pb-3">
                                                    <div className={s.colorRounded} style={{ border: '1px solid aqua', backgroundColor: 'aqua' }}>&nbsp;</div>
                                                    <p className="pt-3 mb-0">#98c68s</p>
                                                    <p>.eventi-purple-10</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <h2 className="text-center">Typography:</h2>
                                        <p className="pt-4">Ethical messenger bag waistcoat raclette. Forage scenester af air plant williamsburg. DIY forage tote bag, pinterest tumeric venmo distillery la croix salvia +1 swag. Ethical messenger bag waistcoat raclette.</p>
                                        <div className="row">
                                            <div className="col">
                                                <div className="pb-3">
                                                    <h1 className="float-left h1 mr-3">H1</h1>
                                                    <p className="pt-1 mb-0">size: 2.5rem</p>
                                                    <p>.h1-title</p>
                                                </div>
                                                <div className="pb-3">
                                                    <h2 className="float-left h2 mr-3">H2</h2>
                                                    <p className="pt-1 mb-0">size: 2.5rem</p>
                                                    <p>.h2-subtitle</p>
                                                </div>
                                                <div className="pb-3">
                                                    <h3 className="float-left h3 mr-3">H3</h3>
                                                    <p className="mb-0">size: 2.5rem</p>
                                                    <p>.h3-subtitle</p>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="pb-3">
                                                    <h4 className="float-left h4 mr-3">H4</h4>
                                                    <p className="mb-0">size: 2.5rem</p>
                                                    <p>.h4-subtitle</p>
                                                </div>
                                                <div className="pb-3">
                                                    <h5 className="float-left ml-0 mt-0 h5 mr-3">H5</h5>
                                                    <p className="mb-0">size: 2.5rem</p>
                                                    <p>.h5-subtitle</p>
                                                </div>
                                                <div className="pb-3">
                                                    <h6 className="float-left h6 mr-3">H6</h6>
                                                    <p className="mb-0">size: 2.5rem</p>
                                                    <p>.h6-subtitle</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4 pb-5" style={{backgroundColor: '#efefef'}}>
                                    <div className="col">
                                        <h2 className="mb-5 mt-5 text-center h1">Features/Pages</h2>
                                        <img src={eventPage} className={s.resizeImage} />
                                    </div>
                                </div>
                                <div className="row mt-4 pb-5">
                                    <div className="col">
                                        <h2 className="mb-5 mt-5 text-center h1">Layout</h2>
                                        <img src={eventiLayout} className={s.resizeImage} />
                                    </div>
                                </div>
                                <div className="row mt-4 pb-2" style={{backgroundColor: '#efefef'}}>
                                    <div className="col">
                                        <h2 className="mb-5 mt-5 text-center h1">Spacing</h2>
                                        <img src={eventiSpacing} className={s.resizeImage} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>











                    <div className={`${s.mainComponent} ${targetCollapse === 'arroz' && targetOn == 'true' && s.autoHeight}`}>
                        <div id="arroz" className={`${s.bottomContainer} ${targetCollapse === 'arroz' && targetOn == 'true' && s.positionSmooth}`} onClick={(e) => {
                            const id = e.target.id;
                            const att = e.target.getAttribute('aria-expanded');
                            this.setState({
                                targetCollapse: id,
                                targetOn: att
                            }, () => {
                                setTimeout(() => {
                                    if(this.state.targetOn == 'true'){
                                        this.scroolHandle(id);
                                    }
                                }, 400);
                            });
                        }} data-toggle="collapse" data-target="#collapseArroz" aria-expanded="false" aria-controls="collapseArroz">
                            <h2 className="mb-0 pl-4 float-left">EVENTI</h2>
                            <h2 className="mb-0 pr-4 float-right">Click to expand <i className="fas fa-chevron-circle-down"></i></h2>
                        </div>
                        <div className="collapse" data-parent="#accordion" id="collapseArroz">
                            <div className={s.contentPopup}>
                                <img src={eventiBanner} className={s.resizeImage} />
                                <div className="row mt-4">
                                    <div className="col">
                                        <h2 className="text-center">Collor Pallete:</h2>
                                        <div className="row">
                                            <div className="col pt-4">
                                                <div className="pb-3">
                                                    <div className={s.colorRounded} style={{ border: '1px solid aqua', backgroundColor: 'aqua' }}>&nbsp;</div>
                                                    <p className="pt-3 mb-0">#98c68s</p>
                                                    <p>.eventi-purple-10</p>
                                                </div>
                                                <div className="pb-3">
                                                    <div className={s.colorRounded} style={{ border: '1px solid aqua', backgroundColor: 'aqua' }}>&nbsp;</div>
                                                    <p className="pt-3 mb-0">#98c68s</p>
                                                    <p>.eventi-purple-10</p>
                                                </div>
                                                <div className="pb-3">
                                                    <div className={s.colorRounded} style={{ border: '1px solid aqua', backgroundColor: 'aqua' }}>&nbsp;</div>
                                                    <p className="pt-3 mb-0">#98c68s</p>
                                                    <p>.eventi-purple-10</p>
                                                </div>
                                            </div>
                                            <div className="col pt-4">
                                                <div className="pb-3">
                                                    <div className={s.colorRounded} style={{ border: '1px solid aqua', backgroundColor: 'aqua' }}>&nbsp;</div>
                                                    <p className="pt-3 mb-0">#98c68s</p>
                                                    <p>.eventi-purple-10</p>
                                                </div>
                                                <div className="pb-3">
                                                    <div className={s.colorRounded} style={{ border: '1px solid aqua', backgroundColor: 'aqua' }}>&nbsp;</div>
                                                    <p className="pt-3 mb-0">#98c68s</p>
                                                    <p>.eventi-purple-10</p>
                                                </div>
                                                <div className="pb-3">
                                                    <div className={s.colorRounded} style={{ border: '1px solid aqua', backgroundColor: 'aqua' }}>&nbsp;</div>
                                                    <p className="pt-3 mb-0">#98c68s</p>
                                                    <p>.eventi-purple-10</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <h2 className="text-center">Typography:</h2>
                                        <p className="pt-4">Ethical messenger bag waistcoat raclette. Forage scenester af air plant williamsburg. DIY forage tote bag, pinterest tumeric venmo distillery la croix salvia +1 swag. Ethical messenger bag waistcoat raclette.</p>
                                        <div className="row">
                                            <div className="col">
                                                <div className="pb-3">
                                                    <h1 className="float-left h1 mr-3">H1</h1>
                                                    <p className="pt-1 mb-0">size: 2.5rem</p>
                                                    <p>.h1-title</p>
                                                </div>
                                                <div className="pb-3">
                                                    <h2 className="float-left h2 mr-3">H2</h2>
                                                    <p className="pt-1 mb-0">size: 2.5rem</p>
                                                    <p>.h2-subtitle</p>
                                                </div>
                                                <div className="pb-3">
                                                    <h3 className="float-left h3 mr-3">H3</h3>
                                                    <p className="mb-0">size: 2.5rem</p>
                                                    <p>.h3-subtitle</p>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="pb-3">
                                                    <h4 className="float-left h4 mr-3">H4</h4>
                                                    <p className="mb-0">size: 2.5rem</p>
                                                    <p>.h4-subtitle</p>
                                                </div>
                                                <div className="pb-3">
                                                    <h5 className="float-left ml-0 mt-0 h5 mr-3">H5</h5>
                                                    <p className="mb-0">size: 2.5rem</p>
                                                    <p>.h5-subtitle</p>
                                                </div>
                                                <div className="pb-3">
                                                    <h6 className="float-left h6 mr-3">H6</h6>
                                                    <p className="mb-0">size: 2.5rem</p>
                                                    <p>.h6-subtitle</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4 pb-5" style={{backgroundColor: '#efefef'}}>
                                    <div className="col">
                                        <h2 className="mb-5 mt-5 text-center h1">Features/Pages</h2>
                                        <img src={eventPage} className={s.resizeImage} />
                                    </div>
                                </div>
                                <div className="row mt-4 pb-5">
                                    <div className="col">
                                        <h2 className="mb-5 mt-5 text-center h1">Layout</h2>
                                        <img src={eventiLayout} className={s.resizeImage} />
                                    </div>
                                </div>
                                <div className="row mt-4 pb-5" style={{backgroundColor: '#efefef'}}>
                                    <div className="col">
                                        <h2 className="mb-5 mt-5 text-center h1">Spacing</h2>
                                        <img src={eventiSpacing} className={s.resizeImage} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PopupContent;
