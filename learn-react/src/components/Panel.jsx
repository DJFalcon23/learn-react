import React from 'react'
import location_icon from './../images/location_icon.png'

export default function Panel(props) {
    // console.log(props)
    
    return (
        <section className='panel'>
            <a className='panel-img' target="_blank" href={props.googleMapsUrl}>
                <img src={props.imageUrl} alt="" />
            </a>
            <div className="pace-link">
                <img src={location_icon} alt="" />
                <span className='country'>{props.location}</span>
                <span className='google-maps-link'><a target="_blank" href={props.googleMapsUrl}>View on Google Maps</a></span>
                <h1 className='place'>{props.title}</h1>
            </div>
            <div className='description-dates'>
                <div className='dates'>{props.startDate} - {props.endDate}</div>
                <p className='place-description'>{props.description}</p>
            </div>
        </section>
    )

}