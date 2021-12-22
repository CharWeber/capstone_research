import React from "react";
import {Grid, Box} from '@mui/material';




export default function Home() {
 




  return(
    <div>
            <h1>Home page</h1>
      <Grid container spacing={2} >
        <Grid item>
          <Box sx={{height: '100px', width: '100%'}}>
            <a href="/athletics">athletics</a>
          </Box>
        </Grid>
      </Grid>
    </div>
  )

}
