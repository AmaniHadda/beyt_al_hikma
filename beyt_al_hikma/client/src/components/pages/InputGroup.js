import React from 'react'
import classnames from 'classnames'
import {
    Input
  } from "reactstrap";
function InputGroup({ type, name, onChangeHandler,   placeholder}) {
    const [firstFocus] = React.useState(false);
  return (
    <div >   
    <Input type={type} className={("no-border input-lg" +(firstFocus ? " input-group-focus" : ""))}  name={name} onChange={onChangeHandler} placeholder={placeholder} />
    
  </div>
  )
}

export default InputGroup