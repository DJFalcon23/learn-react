import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Card from './components/Card'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import FullName from './components/FullName'
import ToD from './components/TimeOfDay'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='container'>
      {/* <Header />
      <Hero />
      <MainContent />
      <Card />
      <Footer /> */}
      <FullName />
      <ToD />
    </section>
  )
}

export default App
