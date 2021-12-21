import React, {useState} from 'react';
import CalendarShell from '../UtilityComponents/CalendarShell';
import FacilityList from '../FacilitiesComponents/FacilityList';


export default function AthleticControl(){

  const [selectedFacilityID, setSelectedFacilityId] = useState(null)

  

  const handleChangeSelectedFacility = (id) => {
    setSelectedFacilityId(id)
  }



  return(
    <div>
      <FacilityList department="athletic" onClickFacility={handleChangeSelectedFacility}/>
      <CalendarShell department="athletic" facilityId={selectedFacilityID} />
    </div>
  )
}