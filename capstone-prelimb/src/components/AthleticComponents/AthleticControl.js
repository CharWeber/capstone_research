import React from 'react';
import CalendarShell from '../UtilityComponents/CalendarShell';

import FacilityList from '../FacilitiesComponents/FacilityList';


export default function AthleticControl(){


  return(
    <div>
      
      <FacilityList department="athletic" />
      <CalendarShell  />
    </div>
  )
}