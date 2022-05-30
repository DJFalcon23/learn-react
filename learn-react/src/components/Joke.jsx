import React from 'react'

export default function Joke(props) {
    return (
        <section className='joke'>
            <h2>{props.setup}</h2>
            <p>{props.punchline} 😂😂🤣</p>
        </section>
    )
}