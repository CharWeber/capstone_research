import React from "react";
import { Box, Container, Typography} from '@mui/material';




export default function Home() {


  return(
    <Container>
      <div>

            <Box sx={{height: '100px', width: '100%', marginTop: '5%'}}>
              <Typography variant='h1' component='div'>
                Home Court
              </Typography>
            </Box>
            <div id="box"/>
      </div>
    </Container>
  )

}
