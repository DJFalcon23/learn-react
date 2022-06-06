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


function App() {
  const cardsArray = cardData.map((el) => {
    return (<Card 
     key={el.id}
     img={el.coverImg}
     rating={el.stats.rating}
     reviewCount={el.stats.reviewCount}
     location={el.location}
     title={el.title}
     price={el.price}
 />)
 })
  return (
    <section className='container'>
      <Header />
      <section className='cards-list'>
        {cardsArray}
      </section>
    </section>
  )
}

export default App
