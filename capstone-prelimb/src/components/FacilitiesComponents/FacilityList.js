import React from "react";
import Facility from "./Facility";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { collection } from "firebase/firestore";


export default function FacilityList(props) {
  const { department, onClickFacility } = props;
  const dataRef = collection(useFirestore(), "facilities");
  const { data, status } = useFirestoreCollectionData(dataRef);
  let filteredData = null;
  let selectFacility = null;

  if (department) {
    filteredData = data?.filter((d) => d.department === department);
  } else {
    filteredData = data;
  }

  const handleChangeFacility = (id) => {
    onClickFacility(id);
  };

  if (onClickFacility){
    selectFacility = handleChangeFacility;
  }

  return (
    <div>
      {status === "loading" ? <div>loading...</div> : null}
      {filteredData?.map((d) => {
        return (
          <Facility
            key={d.NO_ID_FIELD}
            id={d.NO_ID_FIELD}
            name={d.name}
            handleSelect={selectFacility}
          />
        );
      })}

    </div>
  );
}
