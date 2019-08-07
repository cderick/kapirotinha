import React from 'react';
import PropTypes from 'prop-types';
import s from './PopupContent.scss';

class PopupContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popUpcontent: this.props.popUpcontent === 'fashion' ? 'fashion' : 'web',
            targetCollapse: undefined,
            targetOn: undefined,
        }
        this.cumulativeOffset = this.cumulativeOffset.bind(this);
        this.escFunction = this.escFunction.bind(this);
    }

    escFunction(event){
        if(event.keyCode === 27) {
            this.props.handlePopupOverlay()
        }
    }

    componentDidMount(){
        document.addEventListener('keydown', this.escFunction, false);
    }
    
    componentWillUnmount(){
        document.removeEventListener('keydown', this.escFunction, false);
    }

    cumulativeOffset(element) {
        var top = 0, left = 0;
        do {
            top += element.offsetTop || 0;
            left += element.offsetLeft || 0;
            element = element.offsetParent;
        } while (element);

        return {
            top: top,
            left: left
        };
    }

    scroolHandle(id) {
        const myElement = document.querySelector(`#${id}`);
        const accordIon = document.querySelector('#accordion');
        const correctOffset = this.cumulativeOffset(myElement);
        accordIon.scrollTo({
            top: correctOffset.top - 80,
            behavior: 'smooth',
        });
    }

    render() {
        const { popUpcontent, webWorks } = this.props;
        const { targetCollapse, targetOn } = this.state;
        return (
            <div id="pop-up-one" className={`${s.popUpOverlay} ${s.popUpOverlaytarget}`}>
                {webWorks &&
                    <div className={s.popUp} id="accordion">
                        <a className="close" onClick={() => this.props.handlePopupOverlay()} href="javascript:void(0);">&times;</a>
                        <h1 className="mb-2">{webWorks.mainTitle}</h1>
                        <hr className="mb-3 pb-0" />
                        <h4 className="pb-4">{webWorks.descritpion}</h4>
                        {webWorks.allWorks && webWorks.allWorks.map((cv, ind) =>
                            <div key={`${cv.workNameId}${ind}`} className={`${s.mainComponent} ${s[cv.workNameId]} mb-5 ${targetCollapse === cv.workNameId && targetOn == 'true' && s.autoHeight}`}>
                                <div id={cv.workNameId} className={`${s.bottomContainer} ${targetCollapse === cv.workNameId && targetOn == 'true' && s.positionSmooth}`} onClick={(e) => {
                                    const id = e.target.id;
                                    const att = e.target.getAttribute('aria-expanded');
                                    this.setState({
                                        targetCollapse: id,
                                        targetOn: att
                                    }, () => {
                                        console.log(this.state.targetCollapse)
                                        setTimeout(() => {
                                            if (this.state.targetOn == 'true') {
                                                this.scroolHandle(id);
                                            }
                                        }, 400);
                                    });
                                }} data-toggle="collapse" data-target={`#collapse${cv.workNameId}`} aria-expanded="false" aria-controls={`collapse${cv.workNameId}`}>
                                    <h2 className="mb-0 pl-4 float-left">{cv.workNameId}</h2>
                                    <h2 className="mb-0 pr-4 float-right">Click to expand <i className="fas fa-chevron-circle-down"></i></h2>
                                </div>
                                <div className="collapse" data-parent="#accordion" id={`collapse${cv.workNameId}`}>
                                    <div className={s.contentPopup}>
                                        <img src={require(`../../../../../static/${cv.bannerImage}`)} className={s.resizeImage} />
                                        <div className="row mt-4">
                                            <div className="col">
                                                <h2 className="text-center">{cv.collorPallete.mainTitle}</h2>
                                                <div className="row">
                                                    <div className="col pt-4">
                                                        {cv.collorPallete.left &&
                                                            cv.collorPallete.left.map((cpl, indcpl) =>
                                                                <div key={`left${cpl.name}${indcpl}`} className="pb-3">
                                                                    <div className={s.colorRounded} style={{ border: `1px solid ${cpl.color}`, backgroundColor: `${cpl.color}` }}>&nbsp;</div>
                                                                    <p className="pt-3 mb-0">{cpl.color}</p>
                                                                    <p>{cpl.name}</p>
                                                                </div>
                                                            )}
                                                    </div>
                                                    <div className="col pt-4">
                                                        {cv.collorPallete.right &&
                                                            cv.collorPallete.right.map((cpr, indcpr) =>
                                                                <div key={`right${cpr.name}${indcpr}`} className="pb-3">
                                                                    <div className={s.colorRounded} style={{ border: `1px solid ${cpr.color}`, backgroundColor: `${cpr.color}` }}>&nbsp;</div>
                                                                    <p className="pt-3 mb-0">{cpr.color}</p>
                                                                    <p>{cpr.name}</p>
                                                                </div>
                                                            )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <h2 className="text-center">{cv.typoGraphy.mainTitle}</h2>
                                                <p className="pt-4">{cv.typoGraphy.description}</p>
                                                <div className="row">
                                                    <div className="col">
                                                        {cv.typoGraphy.left &&
                                                            cv.typoGraphy.left.map((ctl, indctl) =>
                                                                <div key={`left${ctl.name}${indctl}`} className="pb-3">
                                                                    <h1 className={ctl.classes}>{ctl.type}</h1>
                                                                    <p className={ctl.sizeClass}>{ctl.size}</p>
                                                                    <p>{ctl.name}</p>
                                                                </div>
                                                            )}
                                                    </div>
                                                    <div className="col">
                                                        {cv.typoGraphy.right &&
                                                            cv.typoGraphy.right.map((ctr, indctr) =>
                                                                <div key={`right${ctr.name}${indctr}`} className="pb-3">
                                                                    <h1 className={ctr.classes}>{ctr.type}</h1>
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
                                                <div key={`${bs.mainTitle}${indbs}`} className="row mt-4 pb-5" style={{ backgroundColor: `${bs.background ? bs.background : '#fff'}` }}>
                                                    <div className="col">
                                                        <h2 className="mb-5 mt-5 text-center h1">{bs.mainTitle}</h2>
                                                        <img src={require(`../../../../../static/${bs.images}`)} className={s.resizeImage} />
                                                    </div>
                                                </div>
                                            )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                }
            </div>
        )
    }
}

export default PopupContent;
