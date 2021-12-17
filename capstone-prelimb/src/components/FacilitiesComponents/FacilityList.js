import React, { useState } from "react";
import Facility from "./Facility";
import Button from "@mui/material/Button";
import {
  useFirestore,
  useFirestoreCollectionData,
  useSigninCheck,
} from "reactfire";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import CalendarShell from "../UtilityComponents/CalendarShell";

export default function FacilityList() {
  const dataRef = collection(useFirestore(), "facilities");
  const { status2, data: SignInCheckResult } = useSigninCheck();
  const { data, status } = useFirestoreCollectionData(dataRef);

  const [newFacility, setNewFacility] = useState({ name: "", department: "" });
  const [facilityForm, setFacilityForm] = useState(false);

  let formVisible = null;
  let events = []

  const q = query(dataRef, where('department', '==', 'athletic'))
    getDocs(q).then(querySnapshot => querySnapshot.forEach((doc) => events.push(doc.data())))

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
          <option value="general">General Use</option>
        </select>
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
      <Button variant="outlined" onClick={() => setFacilityForm(!facilityForm)}>
        Add Facility
      </Button>
      {formVisible}
      {status === "loading" ? <div>loading...</div> : null}
      {data?.map((d) => {
        return <Facility key={d.NO_ID_FIELD} name={d.name} />;
      })}
    <CalendarShell />
    </div>
  );
}
