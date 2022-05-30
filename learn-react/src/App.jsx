import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Card from './components/Card'
import Footer from './components/Footer'
import MainContent from './components/MainContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='container'>
      <Header />
      <Hero />
      <MainContent />
      <Card />
      <Footer />
    </section>
  )
}

export default App
