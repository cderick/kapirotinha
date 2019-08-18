import React from 'react';
import PropTypes from 'prop-types';
import s from './ArtContent.scss';

class ArtContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeList: 'li0',
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
        const { artWorks } = this.props;
        const { activeList } = this.state;
        return (
            <div id="pop-up-one" className={`${s.popUpOverlay} ${s.popUpOverlaytarget}`}>
                <a className={`close ${s.myClose}`} onClick={() => this.props.handlePopupOverlay()} href="javascript:void(0);">&times;</a>
                <div className={s.popUp}>
                    <div className="row h-100">
                        <div className={`col-3 p-0 h-100 ${s.panelBackground}`}>
                            <ul className={`nav ${s.tabsLeft} sideways`}>
                                {artWorks && artWorks.length && artWorks.map((cv, ind) => (
                                    <li id={`li${ind}`} key={`artWork${ind}`} onClick={(e) => this.handleClick(e)} className={activeList === `li${ind}` ? s.active : ''}><a href={`#${cv.title}`} data-toggle="tab">{cv.title}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-9">
                            <div className="tab-content p-5">
                                {artWorks && artWorks.length && artWorks.map((av, ix) => (
                                <div key={`imagesArt${ix}`} className={`tab-pane ${ix === 0 ? 'active' : ''}`} id={av.title}>
                                    <div id={`mainCarousel${ix}`} className={`${s.carouselSpec} carousel slide`} data-ride="carousel">
                                        <div className="carousel-inner">
                                            {av.images && av.images.length && av.images.map((img, iImg) => (
                                            <div key={`img${iImg}`} className={`carousel-item ${iImg === 0 ? 'active' : ''}`}>  
                                                <img  className="d-block w-100" src={require(`../../../../../../static/${img.data}`)} alt={img.data} />
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
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ArtContent;
