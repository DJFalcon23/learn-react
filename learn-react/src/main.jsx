import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


function Page() {
  return (
    <App />
  )
}
  
// console.log(navbar)
// document.getElementById('root').append(navbar);

ReactDOM.createRoot(document.getElementById('root')).render(<Page/>)


// ReactDOM.render(navbar, document.getElementById("root"))