import React from 'react'
import hero_img from './../images/Group.png'

export default function Hero() {
    return (
      <section className='hero'>
        <img 
          className='hero-img'
          alt="Grid of horizontily staggered portrait images." 
          src={hero_img}
          />
    </section>
    )
  }
