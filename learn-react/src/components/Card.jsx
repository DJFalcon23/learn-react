import React from "react"
import rating_star from "./../images/Star.png"
/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card(props) {
    console.log(props)
    return (
        <section className="card">
            <img className="card-img" src={`./assets/${props.img}`}/>
            <p className="sale">Sold Out</p>
            <div className="card-stats">
                <img src={rating_star} alt="red star" className="star" />
                <span className="bold">{props.rating}</span>
                <span>{props.reviewCount} • </span>
                <span>{props.country}</span>
            </div>
            <div>{props.title}</div>
            <p><span className="bold">From ${props.price}</span>/ person</p>
        </section>
    )
}