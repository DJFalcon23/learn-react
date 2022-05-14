import React from 'react'

export default function Header() {
    return (
      <header>
          <nav className='nav-bar'>
            <div className='logo-brand'>
              <img 
                className='logo'
                alt="React-icon" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
              />
              <h1>Header Goes Here</h1>
            </div>
            <ul className='nav-links'>
              <li>Price</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>
    )
  }

  