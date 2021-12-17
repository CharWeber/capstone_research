import React from 'react';
import Facility from '../FacilitiesComponents/Facility';
import CalendarShell from '../UtilityComponents/CalendarShell';
import {
  useFirestore,
  useFirestoreCollectionData,
} from "reactfire";
import { collection } from "firebase/firestore";


export default function AthleticControl(){
  const facilityRef = collection(useFirestore(), 'facilities')
  const {data, status} = useFirestoreCollectionData(facilityRef);
  console.log(data)

  
  return(
    <div>
      {status === 'loading' ? <div>Loading</div> : null}
      {data?.map(d => {
        return <Facility key={d.NO_ID_FIELD} name={d.name}/>
      })}
      <CalendarShell  />
    </div>
  )
}