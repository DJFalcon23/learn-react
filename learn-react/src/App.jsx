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
import Joke from './components/Joke'
import cardData from './data/cardData'
import Panel from './components/Panel'
import panelData from './data/travelPlanData'
import MemeInputs from './components/MemeInputs'

function App() {

  return (
    <section className='container'>
      <Header />
      <MemeInputs />
    </section>
  )
}

export default App
