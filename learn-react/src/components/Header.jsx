import React from 'react'
import profile_pic from './../images/airbnb.png'

export default function Header() {
    return (
      <header className='header'>
        <div className='logo-title'>
          <img 
            src={profile_pic}
            className='profile-pic'
            alt="Picture of Derek in a light blue short sleev button." 
            />  
            <p>my travel jounal</p>
        </div>
        <p className='header-subtext'>React Course - Project 3</p>
    </header>
    )
  }

  