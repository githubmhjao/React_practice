import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [idx, setIdx] = useState(0)
  const [memes, setMemes] = useState([])
  
  useEffect(()=>{
    console.log("DidMount!")
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        console.log(response.data.memes.length)
        setMemes(response.data.memes)
      })
  }, [])

  function handleChange(event) {
    const { value } = event.target
    console.log("Change!")
    setIdx(value)
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input type="number" name="idx" value={idx} onChange={handleChange} />
      <h3>{memes.length > 0?memes[idx].name:"Loading..."}</h3>
      <div>
        <img src={memes.length > 0?memes[idx].url:"https://i.imgflip.com/2/hagp.jpg"} alt="random meme" width="300" />
      </div>
    </div>
  );
}
