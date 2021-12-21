import React from "react";
import { Button } from "@mui/material";

export default function reservation(props) {
  const {handleSelect} = props;

  let buttonOptions = null;

  if (handleSelect !== null){
    buttonOptions = <Button style={{display: 'block'}} onClick={() => handleSelect(props.id)}>Detail</Button>
  }

  return(
    <div>
      {props.title}
      {props.start.toString()}
      {props.end.toString()}
      {props.allDay}
      {buttonOptions}
    </div>
  )
}