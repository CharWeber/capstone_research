import React from "react";
import Facility from "./Facility";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { collection } from "firebase/firestore";
import { Grid } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';


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
      {status === "loading" ? <CircularProgress color='secondary' /> : null}
      <Grid container >
        {filteredData?.map((d, index) => {
          return (
            <Grid key={index} item xs={12}>
                <Facility
                  key={d.NO_ID_FIELD}
                  id={d.NO_ID_FIELD}
                  name={d.name}
                  handleSelect={selectFacility}
                />
            </Grid>
          );
        })}
      </Grid>

    </div>
  );
}
