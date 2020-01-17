import React from 'react';
import s from './ArtContent.scss';

class ArtContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeList: 'li0',
        }
        this.handleClick = this.handleClick.bind(this);
        this.equalHeights = this.equalHeights.bind(this);
    }

    handleClick(e) {
        if (e) {
            const mainTarget = e.target;
            if (mainTarget && mainTarget.children.length) {
                mainTarget.children[0].click();
                this.setState({
                    activeList: mainTarget.id,
                }, () => {
                    this.equalHeights();
                });
            } else {
                this.setState({
                    activeList: mainTarget.parentElement.id,
                }, () => {
                    this.equalHeights();
                });
            }
        }
    }

    equalHeights() {
        let findClass = document.getElementsByClassName('equalHeights');
        const finalHeight = document.getElementsByClassName('tab-content')[0] && document.getElementsByClassName('tab-content')[0].offsetHeight;
        const getMinHeight = document.getElementsByClassName('grabMinheight')[0] && document.getElementsByClassName('grabMinheight')[0].offsetHeight;
        if (finalHeight && getMinHeight) {
            for (let i = 0; i < findClass.length; i++) {
                findClass[i].style.minHeight = `${getMinHeight}px`;
                findClass[i].style.height = `${finalHeight}px`;
            }
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.equalHeights);
        $('.carousel').carousel();
        setTimeout(() => {
            this.equalHeights();
        }, 500);
    }

    render() {
        const { artWorks } = this.props;
        const { activeList } = this.state;
        return (
            <div id="pop-up-one" className={`${s.popUpOverlay} ${s.popUpOverlaytarget}`}>
                <div className={s.popUp}>
                    <span className={`close ${s.myClose}`} onClick={() => this.props.handlePopupOverlay()}>&times;</span>
                    <div className="row grabMinheight h-100">
                        <div className={`col-3 p-0 equalHeights ${s.panelBackground}`}>
                            <ul className={`nav ${s.tabsLeft} sideways`}>
                                {artWorks && artWorks.length && artWorks.map((cv, ind) => (
                                    <li id={`li${ind}`} key={`artWork${ind}`} onClick={(e) => this.handleClick(e)} className={activeList === `li${ind}` ? s.active : ''}><a href={`#${cv.title}`} data-toggle="tab">{cv.title}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className={`col-9 d-table equalHeights ${s.removeMobile}`}>
                            <div className="tab-content d-table-cell align-middle p-5">
                                {artWorks && artWorks.length && artWorks.map((av, ix) => (
                                    <div key={`imagesArt${ix}`} className={`tab-pane ${ix === 0 ? 'active' : ''}`} id={av.title}>
                                        <div id={`mainCarousel${ix}`} className={`${s.carouselSpec} carousel slide`} data-ride="carousel">
                                            <div className="carousel-inner pl-5 pr-5">
                                                {av.images && av.images.length && av.images.map((img, iImg) => (
                                                    <div key={`img${iImg}`} className={`carousel-item ${iImg === 0 ? 'active' : ''}`}>
                                                        {av.title === 'Motion' ? (
                                                            <video autoPlay loop className="d-block w-100">
                                                                <source src={require(`../../../../../../static/${img.data}`)} type="video/mp4" />
                                                            </video>
                                                        ) :
                                                            <img className="d-block w-100" src={require(`../../../../../../static/${img.data}`)} alt={img.data} />
                                                        }
                                                    </div>
                                                ))}
                                            </div>
                                            <a className={`${s.carouseControl} ${s.carouselPrev} carousel-control-prev`} href={`#mainCarousel${ix}`} role="button" data-slide="prev">
                                                <span className={`carousel-control-prev-icon ${s.controlLeft}`} aria-hidden="true"></span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                            <a className={`${s.carouseControl} ${s.carouselNext} carousel-control-next`} href={`#mainCarousel${ix}`} role="button" data-slide="next">
                                                <span className={`carousel-control-next-icon ${s.controlRight}`} aria-hidden="true"></span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={`col pb-5 ${s.mobileOnly}`}>
                            <span className={`close ${s.myCloseMobile}`} onClick={() => this.props.handlePopupOverlay()}>&times;</span>
                            {artWorks && artWorks.length && artWorks.map((av, ix) => (
                                <div key={`imagesArt${ix}`} id={`mobile${av.title}`}>
                                    <h2 className={`h2 pt-5 text-center pb-3 ${s.titleMobile}`}>{av.title}</h2>
                                    <div id={`mobileCarousel${ix}`} className={`${s.carouselSpec} carousel slide`} data-ride="carousel">
                                        <div className="carousel-inner pl-5 pr-5">
                                            {av.images && av.images.length && av.images.map((img, iImg) => (
                                                <div key={`img${iImg}`} className={`carousel-item ${iImg === 0 ? 'active' : ''}`}>
                                                    {av.title === 'Motion' ?
                                                        <video playsInline autoPlay loop className="d-block w-100">
                                                            <source src={require(`../../../../../../static/${img.data}`)} type="video/mp4" />
                                                        </video>
                                                        :
                                                        <img className="d-block w-100" src={require(`../../../../../../static/${img.data}`)} alt={img.data} />
                                                    }
                                                </div>
                                            ))}
                                        </div>
                                        <a className={`${s.carouseControl} ${s.carouselPrev} carousel-control-prev`} href={`#mobileCarousel${ix}`} role="button" data-slide="prev">
                                            <span className={`carousel-control-prev-icon ${s.controlLeft}`} aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className={`${s.carouseControl} ${s.carouselNext} carousel-control-next`} href={`#mobileCarousel${ix}`} role="button" data-slide="next">
                                            <span className={`carousel-control-next-icon ${s.controlRight}`} aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ArtContent;
