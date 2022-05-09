import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

function LikeRecact() {
  return (<section>
  <h1>Why I like React</h1>
  <ol>
    <li>Its different</li>
    <li>Theres a larg community behind it</li>
    <li>It might get me a job</li>
  </ol>
</section>)
}
  


// console.log(navbar)
// document.getElementById('root').append(navbar);

ReactDOM.createRoot(document.getElementById('root')).render(<LikeRecact/>)


// ReactDOM.render(navbar, document.getElementById("root"))