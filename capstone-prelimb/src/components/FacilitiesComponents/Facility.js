import React from "react";

export default function Facility(props) {
  const {handleSelect} = props;

  let buttonOptions = null;

  if (handleSelect !== null){
    buttonOptions = <button style={{display: 'block'}} onClick={() => handleSelect(props.id)}>See Reservations</button>
  }

  return(
    <div>
      {props.name}
      {buttonOptions}
    </div>
  )
}