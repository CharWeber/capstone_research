import React, {useState} from 'react';
import CalendarShell from '../UtilityComponents/CalendarShell';
import FacilityList from '../FacilitiesComponents/FacilityList';
import { Button } from '@mui/material';


export default function AthleticControl(){

  const [selectedFacilityId, setSelectedFacilityId] = useState(null)
  let allButton = null;
  

  const handleChangeSelectedFacility = (id) => {
    setSelectedFacilityId(id)
  }

  if (selectedFacilityId !== null){
    allButton = <Button variant='contained' onClick={() => handleChangeSelectedFacility(null)}>See All Reservations</Button>
  }



  return(
    <div>
      <FacilityList department="athletic" onClickFacility={handleChangeSelectedFacility}/>
      {allButton}
      <CalendarShell department="athletic" facilityId={selectedFacilityId} />
    </div>
  )
}