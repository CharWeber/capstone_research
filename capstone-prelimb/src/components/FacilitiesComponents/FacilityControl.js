

import FacilityList from './FacilityList';
import React, { useState } from "react";
import Button from "@mui/material/Button";
import {
  useFirestore,
  useSigninCheck,
} from "reactfire";
import { collection, addDoc} from "firebase/firestore";


export default function FacilityControl(){

  const dataRef = collection(useFirestore(), "facilities");

  const { status2, data: SignInCheckResult } = useSigninCheck();

  const [newFacility, setNewFacility] = useState({ name: "", department: "general" });
  const [facilityForm, setFacilityForm] = useState(false);

  let formVisible = null;
  
  const handleNewFacility = async () => {
    try {
      await addDoc(dataRef, newFacility);
    } catch (e) {
      alert("Error " + e.message);
    }
    setFacilityForm(false);
  };


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
          id="name"
          style={{ width: "20%", marginRight: "10px" }}
          value={newFacility.name}
          onChange={(e) =>
            setNewFacility({ ...newFacility, name: e.target.value })
          }
        />
        <select
          id="deaprtment"
          name="department"
          defaultValue='general'
          onChange={(e) =>
            setNewFacility({ ...newFacility, department: e.target.value })
          }
        >
          <option value="athletic">Athletic</option>
          <option value="craft">Crafts</option>
          <option value="general">General Use</option>
        </select>
        <Button variant="contained" onClick={async () => handleNewFacility()}>
          ADD
        </Button>
      </div>
    );
  }

  return(
    <div>
      {formVisible}
      <Button variant="outlined" onClick={() => setFacilityForm(!facilityForm)}>
        Add Facility
      </Button>
      <FacilityList />
    </div>
  )
}