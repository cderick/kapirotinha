import React from 'react';
import PropTypes from 'prop-types';
import s from './PopupContent.scss';

class PopupContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popUpcontent: this.props.popUpcontent === 'fashion' ? 'fashion' : 'web',
        }
    }

    render() {
        const { popUpcontent } = this.props;
        return (
            <div id="pop-up-one" className={`${s.popUpOverlay} ${s.popUpOverlaytarget}`}>
                <div className={s.popUp}>
                    <h1>{popUpcontent === 'fashion' ? 'Fashion Caralho' : 'Web Caralho'}</h1>
                    <a className="close" onClick={() => this.props.handlePopupOverlay()} href="javascript:void(0);">&times;</a>
                    <p>Ethical messenger bag waistcoat raclette. Forage scenester af air plant williamsburg. DIY forage tote bag, pinterest tumeric venmo distillery la croix salvia +1 swag. Vinyl kale chips copper mug celiac man bun vexillologist, iceland try-hard gentrify man braid tousled. Try-hard typewriter subway tile swag migas tumeric. Raclette cred pok pok DIY twee. Biodiesel pabst craft beer church-key skateboard.Ethical messenger bag waistcoat raclette. Forage scenester af air plant williamsburg. DIY forage tote bag, pinterest tumeric venmo distillery la croix salvia +1 swag. Vinyl kale chips copper mug celiac man bun vexillologist, iceland try-hard gentrify man braid tousled. Try-hard typewriter subway tile swag migas tumeric. Raclette cred pok pok DIY twee. Biodiesel pabst craft beer church-key skateboard.Ethical messenger bag waistcoat raclette. Forage scenester af air plant williamsburg. DIY forage tote bag, pinterest tumeric venmo distillery la croix salvia +1 swag. Vinyl kale chips copper mug celiac man bun vexillologist, iceland try-hard gentrify man braid tousled. Try-hard typewriter subway tile swag migas tumeric. Raclette cred pok pok DIY twee. Biodiesel pabst craft beer church-key skateboard.Ethical messenger bag waistcoat raclette. Forage scenester af air plant williamsburg. DIY forage tote bag, pinterest tumeric venmo distillery la croix salvia +1 swag. Vinyl kale chips copper mug celiac man bun vexillologist, iceland try-hard gentrify man braid tousled. Try-hard typewriter subway tile swag migas tumeric. Raclette cred pok pok DIY twee. Biodiesel pabst craft beer church-key skateboard.Ethical messenger bag waistcoat raclette. Forage scenester af air plant williamsburg. DIY forage tote bag, pinterest tumeric venmo distillery la croix salvia +1 swag. Vinyl kale chips copper mug celiac man bun vexillologist, iceland try-hard gentrify man braid tousled. Try-hard typewriter subway tile swag migas tumeric. Raclette cred pok pok DIY twee. Biodiesel pabst craft beer church-key skateboard.Ethical messenger bag waistcoat raclette. Forage scenester af air plant williamsburg. DIY forage tote bag, pinterest tumeric venmo distillery la croix salvia +1 swag. Vinyl kale chips copper mug celiac man bun vexillologist, iceland try-hard gentrify man braid tousled. Try-hard typewriter subway tile swag migas tumeric. Raclette cred pok pok DIY twee. Biodiesel pabst craft beer church-key skateboard.Ethical messenger bag waistcoat raclette. Forage scenester af air plant williamsburg. DIY forage tote bag, pinterest tumeric venmo distillery la croix salvia +1 swag. Vinyl kale chips copper mug celiac man bun vexillologist, iceland try-hard gentrify man braid tousled. Try-hard typewriter subway tile swag migas tumeric. Raclette cred pok pok DIY twee. Biodiesel pabst craft beer church-key skateboard.Ethical messenger bag waistcoat raclette. Forage scenester af air plant williamsburg. DIY forage tote bag, pinterest tumeric venmo distillery la croix salvia +1 swag. Vinyl kale chips copper mug celiac man bun vexillologist, iceland try-hard gentrify man braid tousled. Try-hard typewriter subway tile swag migas tumeric. Raclette cred pok pok DIY twee. Biodiesel pabst craft beer church-key skateboard.Ethical messenger bag waistcoat raclette. Forage scenester af air plant williamsburg. DIY forage tote bag, pinterest tumeric venmo distillery la croix salvia +1 swag. Vinyl kale chips copper mug celiac man bun vexillologist, iceland try-hard gentrify man braid tousled. Try-hard typewriter subway tile swag migas tumeric. Raclette cred pok pok DIY twee. Biodiesel pabst craft beer church-key skateboard.Ethical messenger bag waistcoat raclette. Forage scenester af air plant williamsburg. DIY forage tote bag, pinterest tumeric venmo distillery la croix salvia +1 swag. Vinyl kale chips copper mug celiac man bun vexillologist, iceland try-hard gentrify man braid tousled. Try-hard typewriter subway tile swag migas tumeric. Raclette cred pok pok DIY twee. Biodiesel pabst craft beer church-key skateboard.Ethical messenger bag waistcoat raclette. Forage scenester af air plant williamsburg. DIY forage tote bag, pinterest tumeric venmo distillery la croix salvia +1 swag. Vinyl kale chips copper mug celiac man bun vexillologist, iceland try-hard gentrify man braid tousled. Try-hard typewriter subway tile swag migas tumeric. Raclette cred pok pok DIY twee. Biodiesel pabst craft beer church-key skateboard.Ethical messenger bag waistcoat raclette. Forage scenester af air plant williamsburg. DIY forage tote bag, pinterest tumeric venmo distillery la croix salvia +1 swag. Vinyl kale chips copper mug celiac man bun vexillologist, iceland try-hard gentrify man braid tousled. Try-hard typewriter subway tile swag migas tumeric. Raclette cred pok pok DIY twee. Biodiesel pabst craft beer church-key skateboard.Ethical messenger bag waistcoat raclette. Forage scenester af air plant williamsburg. DIY forage tote bag, pinterest tumeric venmo distillery la croix salvia +1 swag. Vinyl kale chips copper mug celiac man bun vexillologist, iceland try-hard gentrify man braid tousled. Try-hard typewriter subway tile swag migas tumeric. Raclette cred pok pok DIY twee. Biodiesel pabst craft beer church-key skateboard.Ethical messenger bag waistcoat raclette. Forage scenester af air plant williamsburg. DIY forage tote bag, pinterest tumeric venmo distillery la croix salvia +1 swag. Vinyl kale chips copper mug celiac man bun vexillologist, iceland try-hard gentrify man braid tousled. Try-hard typewriter subway tile swag migas tumeric. Raclette cred pok pok DIY twee. Biodiesel pabst craft beer church-key skateboard.Ethical messenger bag waistcoat raclette. Forage scenester af air plant williamsburg. DIY forage tote bag, pinterest tumeric venmo distillery la croix salvia +1 swag. Vinyl kale chips copper mug celiac man bun vexillologist, iceland try-hard gentrify man braid tousled. Try-hard typewriter subway tile swag migas tumeric. Raclette cred pok pok DIY twee. Biodiesel pabst craft beer church-key skateboard.Ethical messenger bag waistcoat raclette. Forage scenester af air plant williamsburg. DIY forage tote bag, pinterest tumeric venmo distillery la croix salvia +1 swag. Vinyl kale chips copper mug celiac man bun vexillologist, iceland try-hard gentrify man braid tousled. Try-hard typewriter subway tile swag migas tumeric. Raclette cred pok pok DIY twee. Biodiesel pabst craft beer church-key skateboard.Ethical messenger bag waistcoat raclette. Forage scenester af air plant williamsburg. DIY forage tote bag, pinterest tumeric venmo distillery la croix salvia +1 swag. Vinyl kale chips copper mug celiac man bun vexillologist, iceland try-hard gentrify man braid tousled. Try-hard typewriter subway tile swag migas tumeric. Raclette cred pok pok DIY twee. Biodiesel pabst craft beer church-key skateboard.Ethical messenger bag waistcoat raclette. Forage scenester af air plant williamsburg. DIY forage tote bag, pinterest tumeric venmo distillery la croix salvia +1 swag. Vinyl kale chips copper mug celiac man bun vexillologist, iceland try-hard gentrify man braid tousled. Try-hard typewriter subway tile swag migas tumeric. Raclette cred pok pok DIY twee. Biodiesel pabst craft beer church-key skateboard.</p>
                </div>
            </div>
        )
    }
}

export default PopupContent;
