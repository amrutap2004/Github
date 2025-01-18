import React from 'react';


function About(props) {

    // const [mystyle , setMystyle] =useState({
    //     color: 'black',
    //     backgroundColor :'white'
    // });

    // const [btnText , setBtnText] =useState("Enable Dark Mode");
    
    // const toggleMode =()=>{
    
    //     if(mystyle.color === 'black'){
    //         setMystyle({
    //             color: 'white',
    //             backgroundColor :'black'
    //         });
    //         setBtnText("Enable Light Mode");
    //     }
    //     else{
    //         setMystyle({
    //             color: 'black',
    //             backgroundColor :'white'
    //         });
    //         setBtnText("Enable Dark Mode");
    //     }
    // }

    let mystyle ={
        color: props.mode === 'dark' ? 'white' :'black',
        backgroundColor : props.mode === 'dark' ? '#06244f' :'white'
    }

  return (
    
    <div className='container' style={mystyle}>
        <h1 className='my-3'>About TextUtils</h1>
        <p>Welcome to TextUtils – your one-stop solution for all text-related needs!</p>
        <p>TextUtils is a versatile tool designed to simplify and enhance how you work with text. Whether you're a student, writer, developer, or anyone who deals with text daily, our platform offers a range of features to save you time and effort.</p>
            <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Text Manipulation
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
                <strong>Convert to uppercase/lowercase, capitalize text, or remove extra spaces effortlessly.</strong> 
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Word and Character Count
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
                <strong>Quickly analyze the length and structure of your content.</strong> 
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Text Formatting
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
                <strong>Format text for better readability and alignment.</strong> 
            </div>
            </div>
        </div>
        </div>

        {/* <div className="container my-3">
        <button className='btn btn-primary' onClick={toggleMode}>{btnText}</button>
        </div> */}

    </div>
  )
}

export default About
