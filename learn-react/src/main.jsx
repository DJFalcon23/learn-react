import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'

function Page() {
  return (
    <section>
      <Header />
      <MainContent />
     <Footer />
    </section>
  )
}
  
// console.log(navbar)
// document.getElementById('root').append(navbar);

ReactDOM.createRoot(document.getElementById('root')).render(<Page/>)


// ReactDOM.render(navbar, document.getElementById("root"))