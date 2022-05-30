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

function App() {
  return (
    <section className='container'>
      <Joke 
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
      />
      <Joke 
        setup="How did the hacker escape the police?"
        punchline=" He just ransomware!"
      />
      <Joke 
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
      />
      <Joke 
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm"
      />
      <Joke 
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
      />
    </section>
  )
}

export default App
