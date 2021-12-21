import React, {useState} from 'react';
import CalendarShell from '../UtilityComponents/CalendarShell';
import FacilityList from '../FacilitiesComponents/FacilityList';
import { Button } from '@mui/material';


export default function CraftControl(){

  const [selectedFacilityId, setSelectedFacilityId] = useState(null)
  let allButton = null;
  const handleChangeSelectedFacility = (id) => {
    setSelectedFacilityId(id)
  }

  if (selectedFacilityId !== null){
    allButton = <Button onClick={() => handleChangeSelectedFacility(null)}>See All Reservations</Button>
  }

  return(
    <div>
      <FacilityList department="craft" onClickFacility={handleChangeSelectedFacility}/>
      {allButton}
      <CalendarShell department='craft' facilityId={selectedFacilityId} />
    </div>
  )
}