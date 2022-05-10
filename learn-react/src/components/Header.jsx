import React from 'react'

export default function Header() {
    return (
        <header>
          <nav className='nav-bar'>
            <img 
              className='logo'
              alt="React-icon" 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
            />
            <ul className='nav-links'>
              <li>Price</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>
    )
  }