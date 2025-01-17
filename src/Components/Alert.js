import React from 'react'

function Alert(props) {

    const  captilize =(word) =>{
        word = word.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

  return (
      props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">  
        <strong>{captilize(props.alert.type)}</strong> : {props.alert.msg}
    </div>
    
  )
}

export default Alert

// props.alert && something   if props.alert is true thin something will executed , otherwise something is not executed