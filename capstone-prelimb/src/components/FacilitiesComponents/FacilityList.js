import React from "react";
import Facility from "./Facility";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { collection } from "firebase/firestore";

export default function FacilityList(props) {
  const { department } = props;
  const dataRef = collection(useFirestore(), "facilities");
  const { data, status } = useFirestoreCollectionData(dataRef)
  let filteredData = null;

if (department) {
  filteredData = data?.filter(d=> d.department === department)
} else{
  filteredData = data
}
  
  return (
    <div>
      {status === 'loading' ? <div>loading...</div>: null}
      {filteredData?.map((d) => {
        return <Facility key={d.NO_ID_FIELD} name={d.name} />;
      })}
    </div>
  );

}
