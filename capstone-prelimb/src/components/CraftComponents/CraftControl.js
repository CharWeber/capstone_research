import React, {useState} from 'react';
import CalendarShell from '../UtilityComponents/CalendarShell';
import FacilityList from '../FacilitiesComponents/FacilityList';
import { Button, Grid } from '@mui/material';


export default function CraftControl(){

  const [selectedFacilityId, setSelectedFacilityId] = useState(null)
  let allButton = null;
  const handleChangeSelectedFacility = (id) => {
    setSelectedFacilityId(id)
  }

  if (selectedFacilityId !== null){
    allButton = <Button style={{marginLeft: '15px'}} variant='contained' onClick={() => handleChangeSelectedFacility(null)}>See All Reservations</Button>
  }

  return(
    <div>
      <Grid container spacing={1} columns={16}>
        <Grid item xs={3}>
          <FacilityList department="craft" onClickFacility={handleChangeSelectedFacility}/>
          {allButton}
        </Grid>
        <Grid item xs={13}>
          <CalendarShell department="craft" facilityId={selectedFacilityId} />
        </Grid>
      </Grid>
    </div>
  )
}