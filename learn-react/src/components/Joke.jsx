import React from 'react'

export default function Joke(props) {
    const punColor = props.isPun && "salmon";
    // function comments() {
    //     let commentList = props.comments.reduce((p, c) => {
    //         let el = (<section>
    //         <h4>{p.author}</h4>
    //         <strong>{p.title}</strong>
    //         <p>{p.body}</p>
    //     </section>)
    //         return el.append(c);
    //     })
    //     return commentList
    // }
    const children = props.comments.map((comm) => (
        <section>
            <h4 style={{margin:2+'px'}}>{comm.author}</h4>
            <span>'<strong>{comm.title}</strong>'</span>
            <span>: {comm.body}</span>
            <hr/>
        </section>
      ));
        console.log(children);
    return (
        
        <section className='joke' style={{ background: punColor }}>
            {props.isPun && <h2>{props.setup}</h2>}
            <p>{props.punchline} 😂😂🤣</p>
            <p><strong>👍🏾: {props.upvotes}</strong>  <strong>👎🏾: {props.downvotes}</strong></p>
            <details>
                <summary>Comments</summary>
                <div style={{ display: 'flex', flexDirection: 'column',alignItems: "flex-end"}}>
                {children}
                </div>
            </details>
        </section>
    )
}