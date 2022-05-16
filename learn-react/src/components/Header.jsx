import React from 'react'
import profile_pic  from './../images/profile_pic.jpg'

export default function Header() {
    return (
      <section className='personal-info'>
        <img 
          className='profile-pic'
          alt="Picture of Derek in a light blue short sleev button." 
          src={profile_pic}
          />
        <div className='info'>
          <h1>Derek Fields</h1>
          <h3>Full-Stack Developer</h3>
          <p><a href="https://derekfields.is">derekfields.is</a></p>
          <div className='btn-group'>
            <button className='btn-email'>Email</button>
            <button className='btn-linkedin'>LinkedIn</button>
          </div>
      </div>  
    </section>
    )
  }

  