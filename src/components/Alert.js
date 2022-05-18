import React from 'react'

function Alert(props) {
  //Showing the all the messages. Error and successful
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{props.alert.type}</strong>: {props.alert.msg} 
  
</div>
  )
}

export default Alert