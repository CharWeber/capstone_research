import React from "react";
import {Grid, Box} from '@mui/material';




export default function Home() {
 




  return(
    <div>
      <Grid container spacing={2} >
        <Grid item>
          <Box sx={{height: '100px', width: '100%'}}>
            <h1>Home page</h1>
          </Box>
        </Grid>
      </Grid>
    </div>
  )

}
