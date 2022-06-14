import React from "react";
import memesData from "../memesData";

export default function MemeInputs() {
    let [memeImgSrc, setMemeUrl] = React.useState("memeUrl");
    async function x() {
        let getImg = new Request("http://localhost:3006/memes?name_like=nut")
        const rex =  await fetch(getImg)
        const [data] = await rex.json();
        console.log(data);
    }

  x()

    function handleClick() {
        console.log("I ws clicked!");
    }
    function handleMouseOver() {
        console.log("This the meme.")
    }
    async function getMeme() {
        let memeIndex = Math.floor(Math.random() * 99);
        let resMeme = memesData.data.memes[memeIndex];
        // let getImg = new Request("localhost:3004/memes/id/93895088")
        setMemeUrl((prevMemeImg) => {
            console.log(prevMemeImg.url,  memesData.data.memes.indexOf(prevMemeImg));
            return prevMemeImg = resMeme;
        } );
      }

    return (
        <section className="meme-inputs">
            <input type="text" className="top-txt-input" placeholder="Top Text Here" />
            <input type="text" className="bottom-txt-input" placeholder="Bottom Text Here"/>
            <button onClick={getMeme} className="meme-button">Get a new meme image 🖼️</button>
            <img onMouseOver={handleMouseOver}  src={memeImgSrc.url} alt="meme cat" className="meme-img"/>
        </section>
    )



}