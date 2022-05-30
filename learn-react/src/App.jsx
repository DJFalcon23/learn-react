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
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='container'>
      {/* <Header />
      <Hero />
      <MainContent />
      <Card />
      <Footer /> */}
      {/* <FullName />
      <ToD /> */}
      <Contact 
        img="https://placekitten.com/200/303"
        name="Mr.Whateva"
        tele="410555509"
        email="whateve@gmail.com"
      />
      <Contact 
        img="https://placekitten.com/200/301"
        name="Suppers"
        tele="3305966644"
        email="Sup@gamil.com"
      />
      <Contact 
        img="https://placekitten.com/200/304"
        name="Rex"
        tele="2403459118"
        email='rex@gmail.com'
      />
      <Contact 
        img="https://placekitten.com/200/308"
        name="Blip"
        tele="5291190345"
        email="blip@gmail.com"
      />
    </section>
  )
}

export default App
