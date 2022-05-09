import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const navbar = (
  <nav>
      <h1>Bob's Bistro</h1>
      <ul>
          <li>Menu</li>
          <li>About</li>
          <li>Contact</li>
      </ul>
  </nav>
)

// console.log(navbar)
// document.getElementById('root').append(navbar);

ReactDOM.createRoot(document.getElementById('root')).render(navbar
  
// )


// ReactDOM.render(navbar, document.getElementById("root"))