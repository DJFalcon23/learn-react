import React from 'react'
import cat_pic from './../images/mr-whiskerson.webp'

export default function Contact(props) {

    let {img, name, email, tele} = props;

    return (
        <div className="contacts">
            <div className="contact-card">
                <img src={img}/>
                <h3>{name}</h3>
                <div className="info-group">
                    <img src="./images/phone-icon.png" />
                    <p><a href="tel:\{tele\}" tel={tele}>{tele}</a></p>
                </div>
                <div className="info-group">
                    <img src="./images/mail-icon.png" />
                    <p>{email}</p>
                </div>
            </div>
        </div>
    )
}