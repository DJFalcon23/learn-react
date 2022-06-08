import React from 'react'
import profile_pic from './../images/airbnb.png'

export default function Header() {
    return (
      <header className='header'>
        {/* <img 
          className='profile-pic'
          alt="Picture of Derek in a light blue short sleev button." 
          src={profile_pic}
          /> */}
          <a href="https://www.freeiconspng.com/img/3018" title="Image from freeiconspng.com"><img src="https://www.freeiconspng.com/uploads/world-icon-16.png" width="50" alt="World Png Save" /></a>
          <p>my travel jounal</p>
    </header>
    )
  }

  