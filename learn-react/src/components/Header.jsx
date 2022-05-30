import React from 'react'
import profile_pic from './../images/airbnb.png'

export default function Header() {
    return (
      <header className='header'>
        <img 
          className='profile-pic'
          alt="Picture of Derek in a light blue short sleev button." 
          src={profile_pic}
          />
    </header>
    )
  }

  