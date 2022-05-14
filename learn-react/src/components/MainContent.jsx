import React from "react"

export default function MainContent() {
    return (
        <main className="main">
        <h1>Why I like React</h1>
        <ul>
          <li>Its different</li>
          <li>Theres a larg community behind it</li>
          <li>It might get me a job</li>
        </ul>
        <img 
        className='logo-bg'
        alt="React-icon" 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
      />
      </main>
    )
  }