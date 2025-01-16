import React, { useState } from 'react'


export default function TextForm(props) {

    const [text , setText] =useState('');

    const handleOnchange =(event)=>{
        //console.log("Clicked on change");
        setText(event.target.value);   // new value is set to text (text + new value)
    }

    const handleLoclick =() =>{
        let New = text.toLowerCase();
        setText(New);
    }

    const handleUpclick =()=>{
        //console.log("Clicked on button");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleClearclick =() =>{
        let newText ='';
        setText(newText);
    }

  return (
    <>
        <div className='container my-3'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnchange} id="mytextarea" rows="8"></textarea> 
        </div>
        <button type="submit" className="btn btn-primary mx-3" onClick={handleUpclick}>Convert to Uppercase</button>
        <button type="submit" className="btn btn-primary mx-3" onClick={handleLoclick}>Convert to Lowercase</button>
        <button type="submit" className="btn btn-primary mx-3" onClick={handleClearclick}>Clear text</button>
        

        </div>

        <div className="container">
            <h2>Text Summary</h2>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p> {0.008 * text.split(" ").length} Minutes to read</p>
            <h3>Preview</h3>
            <p>{text}</p>

        </div>
    </>
    
  )
}
