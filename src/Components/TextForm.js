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
        props.showAlert("Convert into Lowercase" , "success");
    }

    const handleUpclick =()=>{
        //console.log("Clicked on button");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert into Uppercase" , "success");
    }
    const handleClearclick =() =>{
        let newText ='';
        setText(newText);
        props.showAlert("Text cleared" , "success");
    }

  return (
    <>
        <div className='container my-3' style= {{color : props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} style= {{backgroundColor : props.mode==='dark'?'#06244f':'white' , color : props.mode==='dark'?'white':'black'}}onChange={handleOnchange} id="mytextarea" rows="8"></textarea> 
        </div>
        <button type="submit" className="btn btn-primary mx-3" onClick={handleUpclick}>Convert to Uppercase</button>
        <button type="submit" className="btn btn-primary mx-3" onClick={handleLoclick}>Convert to Lowercase</button>
        <button type="submit" className="btn btn-primary mx-3" onClick={handleClearclick}>Clear text</button>
        

        </div>

        <div className="container" style= {{color : props.mode==='dark'?'white':'black'}}>
            <h2>Text Summary</h2>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p> {0.008 * text.split(" ").length} Minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length > 0 ? text :"Enter Text in above box to preview it here."}</p>

        </div>
    </>
    
  )
}
