import React from 'react';
import PropTypes from 'prop-types';
import s from './ArtContent.scss';

class ArtContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeList: 'li1',
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        if(e){
            const mainTarget = e.target;
            if(mainTarget && mainTarget.children.length){
                mainTarget.children[0].click();
                this.setState({
                    activeList: mainTarget.id,
                });
            } else {
                this.setState({
                    activeList: mainTarget.parentElement.id,
                });
            }
        }
    }

    componentDidMount() {
        $('.carousel').carousel();
    }

    render() {
        const { activeList } = this.state;
        return (
            <div id="pop-up-one" className={`${s.popUpOverlay} ${s.popUpOverlaytarget}`}>
                <a className={`close ${s.myClose}`} onClick={() => this.props.handlePopupOverlay()} href="javascript:void(0);">&times;</a>
                <div className={s.popUp}>
                    <div className="row h-100">
                        <div id="galery" className={`col-3 p-0 h-100 ${s.panelBackground}`}>
                            <ul className={`nav ${s.tabsLeft} sideways`}>
                                <li id="li1" onClick={(e) => this.handleClick(e)} className={activeList === 'li1' ? s.active : ''}><a href="#home-v" data-toggle="tab">Artworks</a></li>
                                <li id="li2" onClick={(e) => this.handleClick(e)} className={activeList === 'li2' ? s.active : ''}><a href="#profile-v" data-toggle="tab">Banners</a></li>
                                <li id="li3" onClick={(e) => this.handleClick(e)} className={activeList === 'li3' ? s.active : ''}><a href="#messages-v" data-toggle="tab">Fashion</a></li>
                                <li id="li4" onClick={(e) => this.handleClick(e)} className={activeList === 'li4' ? s.active : ''}><a href="#settings-v" data-toggle="tab">Logos</a></li>
                                <li id="li5" onClick={(e) => this.handleClick(e)} className={activeList === 'li5' ? s.active : ''}><a href="#posters-v" data-toggle="tab">Posters</a></li>
                            </ul>
                        </div>
                        <div className="col-9">
                            <div className="tab-content p-5">
                                <div className="tab-pane active" id="home-v">Home Tab.</div>
                                <div className="tab-pane" id="profile-v">Profile Tab.</div>
                                <div className="tab-pane" id="messages-v">Messages Tab.</div>
                                <div className="tab-pane" id="settings-v">
                                    <div id="carouselExampleControls" className={`${s.carouselSpec} carousel slide`} data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img className="d-block w-100" src="https://static.businessinsider.com/image/4f3433986bb3f7b67a00003c-750.jpg" alt="First slide" />
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src="http://www.pethealthnetwork.com/sites/default/files/malignant-melanomas-in-cats459216171.jpg" alt="Second slide" />
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpeopledotcom.files.wordpress.com%2F2018%2F10%2Ffat-cat-4.jpg" alt="Third slide" />
                                            </div>
                                        </div>
                                        <a className={`${s.carouseControl} ${s.carouselPrev} carousel-control-prev`} href="#carouselExampleControls" role="button" data-slide="prev">
                                            <span className={`carousel-control-prev-icon ${s.controlLeft}`} aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className={`${s.carouseControl} ${s.carouselNext} carousel-control-next`} href="#carouselExampleControls" role="button" data-slide="next">
                                            <span className={`carousel-control-next-icon ${s.controlRight}`} aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="tab-pane" id="posters-v">Messages Tab.</div>
                            </div>
                        </div>

                        <div className="clearfix"></div>

                    </div>
                </div>
            </div>
        )
    }
}

export default ArtContent;
