import React from "react";
import { Button, Divider, Card, CardContent, CardActions, Typography} from '@mui/material'


export default function reservation(props) {
  const {handleSelect, title, start, end} = props;

  let buttonOptions = null;

  if (handleSelect !== null){
    buttonOptions = <Button style={{display: 'block'}} onClick={() => handleSelect(props.id)}>Detail</Button>
  }

  return(
    <div>
      <Card sx={{padding: '10px', width: 'fit-content', minWidth: '30vw', height: '10%', borderColor: '994B68', borderStyle: 'solid', backgroundColor: '#E0C9D1', borderRadius: '5px', margin: '10px', textAlign: 'left'}}>
        <CardContent>
          <Typography variant='h5' component='div'>{title}</Typography>
          <Divider />
          <Typography variant='h6' component='div'>Begins: {start.toDateString() + ' at ' + start.toLocaleTimeString('en-US')}</Typography>
          <Typography variant='h6' component='div'>Ends: {end.toDateString() + ' at ' + end.toLocaleTimeString('en-US')}</Typography>
          <CardActions>{buttonOptions}</CardActions>
        </CardContent>
      </Card>
    </div>
  )
}