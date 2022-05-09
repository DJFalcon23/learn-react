import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

function Header() {
  return (
      <header>
        <nav>
          <img 
            width="40" 
            alt="React-icon" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
          />
        </nav>
      </header>
  )
}

function Footer() {
  return (
    <footer>
        <small>© 20xx Fields development. All rights reserved.</small>
      </footer>
  )
}

function MainContent() {
  return (
    <main>
      <h1>Why I like React</h1>
      <ol>
        <li>Its different</li>
        <li>Theres a larg community behind it</li>
        <li>It might get me a job</li>
      </ol>
    </main>
    
  )
}

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