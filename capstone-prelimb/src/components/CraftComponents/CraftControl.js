import React, {useState} from 'react';
import CalendarShell from '../UtilityComponents/CalendarShell';
import FacilityList from '../FacilitiesComponents/FacilityList';


export default function CraftControl(){

  const [selectedFacilityID, setSelectedFacilityId] = useState(null)

  

  const handleChangeSelectedFacility = (id) => {
    setSelectedFacilityId(id)
  }



  return(
    <div>
      <FacilityList department="craft" onClickFacility={handleChangeSelectedFacility}/>
      <CalendarShell department='craft' facilityId={selectedFacilityID} />
    </div>
  )
}