import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='container'>
      <Header />
      <MainContent />
      {/* <Footer /> */}
    </section>
  )
}

export default App
