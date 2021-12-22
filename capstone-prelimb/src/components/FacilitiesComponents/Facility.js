import React from "react";
import {Box, Button} from '@mui/material'



export default function Facility(props) {
  const {handleSelect} = props;

  let buttonOptions = null;

  if (handleSelect !== null){
    buttonOptions = <Button style={{display: 'block', float: 'right'}} onClick={() => handleSelect(props.id)}>See Reservations</Button>
  }

  return(
    <div>
      <Box sx={{width: '100%', minHeight: '45px', backgroundColor: '#7EB0CB', borderRadius: '5px', margin: '0', top: '50%'}}>
        {props.name}
        {buttonOptions}
      </Box>
    </div>
  )
}