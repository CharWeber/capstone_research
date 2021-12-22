import React from "react";
import {Box, Button, Divider} from '@mui/material'



export default function Facility(props) {
  const {handleSelect} = props;

  let buttonOptions = null;

  if (handleSelect !== null){
    buttonOptions = <Button variant='contained'  onClick={() => handleSelect(props.id)}>See Reservations</Button>
  }

  return(
    <div>
      <Box sx={{padding: '10px', width: '100%', height: '10%', backgroundColor: '#7EB0CB', borderRadius: '5px', margin: '10px', textAlign: 'center'}}>
        {props.name}
        <Divider>~~~</Divider>
        {buttonOptions}
      </Box>
    </div>
  )
}