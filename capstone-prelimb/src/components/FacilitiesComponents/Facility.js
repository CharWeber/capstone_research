import React from "react";
import {Box, Button} from '@mui/material'


export default function Facility(props) {
  const {handleSelect} = props;

  let buttonOptions = null;

  if (handleSelect !== null){
    buttonOptions = <Button variant='outlined' style={{display: 'block'}} onClick={() => handleSelect(props.id)}>See Reservations</Button>
  }

  return(
    <div>
      <Box>
        {props.name}
        {buttonOptions}
      </Box>
    </div>
  )
}