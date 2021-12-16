import React, { useState } from "react";
import Facility from "./Facility";
import Button from "@mui/material/Button";
import {
  useFirestore,
  useFirestoreCollectionData,
  useSigninCheck,
} from "reactfire";
import { collection, addDoc } from "firebase/firestore";

export default function FacilityList() {
  const dataRef = collection(useFirestore(), "facilities");
  const { status2, data: SignInCheckResult } = useSigninCheck();
  const { data, status } = useFirestoreCollectionData(dataRef);


  console.log(SignInCheckResult);
  
  const [newFacility, setNewFacility] = useState({ name: "" });
  const [facilityForm, setFacilityForm] = useState(false);
  
  let formVisible = null;
  
  if (status2 === "loading") {
    return <div>Loading...</div>;
  } else if (SignInCheckResult === false) {
    return <div>You must be signed In to view this page</div>;
  }

  
  if (facilityForm) {
    formVisible = (
      <div>
        <input
          type="text"
          placeholder="Name Of Facility"
          style={{ width: "20%", marginRight: "10px" }}
          value={newFacility.name}
          onChange={(e) =>
            setNewFacility({ ...newFacility, name: e.target.value })
          }
          />
        <Button variant="contained" onClick={async () => handleNewFacility()}>
          ADD
        </Button>
      </div>
    );
  }
  
  const handleNewFacility = async () => {
    try {
      await addDoc(dataRef, newFacility);
    } catch (e) {
      alert("Error " + e.message);
    }
    setFacilityForm(false);
  };
  
  return (
    <div>
        <h3>this is where the list begins</h3>
        <Button
          variant="outlined"
          onClick={() => setFacilityForm(!facilityForm)}
        >
          Add Facility
        </Button>
        {formVisible}
        {status === "loading" ? <div>loading...</div> : null}
        {data?.map((d) => {
          return <Facility key={d.NO_ID_FIELD} name={d.name} />;
        })}
      </div>
    );
  }

