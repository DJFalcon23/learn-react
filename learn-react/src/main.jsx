import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const section = (
  <section>
    <img width="40" alt="React-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"/>
    <h1>Fun Facts About React</h1>
    <ol>
      <li>Was first released in 2013</li>
      <li>Was Orginally created by Jordan Walker</li>
      <li>Has well over 100k stars on GitHub</li>
      <li>Is maintained by facebook</li>
      <li>Powers many different types of apps</li>
    </ol>
  </section>
)

// console.log(navbar)
// document.getElementById('root').append(navbar);

ReactDOM.createRoot(document.getElementById('root')).render(section)


// ReactDOM.render(navbar, document.getElementById("root"))