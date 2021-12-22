import React from "react";
import { Button, Divider, Card, CardContent, CardActions, Typography} from '@mui/material'



export default function Facility(props) {
  const {handleSelect} = props;

  let buttonOptions = null;

  if (handleSelect !== null){
    buttonOptions = <Button   onClick={() => handleSelect(props.id)}>See Reservations</Button>
  }

  return(
    <div>
      <Card sx={{padding: '10px', width: '100%', height: '10%', borderColor: '994B68', borderStyle: 'solid', backgroundColor: '#E0C9D1', borderRadius: '5px', margin: '10px', textAlign: 'center'}}>
        <CardContent>
          <Typography variant='h6' component='div'>{props.name}</Typography>
          <Divider />
          <CardActions>{buttonOptions}</CardActions>
        </CardContent>
      </Card>
    </div>
  )
}