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
        upvotes={23}
        downvotes={1}
        isPun={false}
        comments={[{author: "Joe92374", body: "The funnyest crap EVER!!!", title: "Good Stuff"}, {author: "beaQT66", body: "FUNNY af! So Good!", title: "WOW LOL!!!"}]}
      />
      <Joke 
        setup="How did the hacker escape the police?"
        punchline=" He just ransomware!"
        upvotes={55}
        downvotes={12}
        isPun={false}
        comments={[{author: "Joe92374", body: "The funnyest crap EVER!!!", title: "Good Stuff"}, {author: "beaQT66", body: "FUNNY af! So Good!", title: "WOW LOL!!!"}]}
      />
      <Joke 
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
        upvotes={87}
        downvotes={39}
        isPun={true}
        comments={[{author: "Joe92374", body: "The funnyest crap EVER!!!", title: "Good Stuff"}, {author: "beaQT66", body: "FUNNY af! So Good!", title: "WOW LOL!!!"}]}
      />
      <Joke 
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm"
        upvotes={38}
        downvotes={61}
        isPun={true}
        comments={[{author: "Joe92374", body: "The funnyest crap EVER!!!", title: "Good Stuff"}, {author: "beaQT66", body: "FUNNY af! So Good!", title: "WOW LOL!!!"}]}
      />
      <Joke 
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
        upvotes={26}
        downvotes={14}
        isPun={true}
        comments={[{author: "Joe92374", body: "The funnyest crap EVER!!!", title: "Good Stuff"}, {author: "beaQT66", body: "FUNNY af! So Good!", title: "WOW LOL!!!"}]}
      />
    </section>
  )
}

export default App
