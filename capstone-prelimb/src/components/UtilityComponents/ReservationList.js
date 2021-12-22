import React from "react";
import Reservation from "./Reservation";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { collection } from "firebase/firestore";
import {Grid} from '@mui/material';


export default function ReservationList(props) {
  const { user, onClickReservation } = props;
  const dataRef = collection(useFirestore(), "reservations");
  const { data, status } = useFirestoreCollectionData(dataRef);
  let filteredData = null;
  let selectReservation = null;
  const handleChangeReservation = (id) => {
    onClickReservation(id);
  };


  if (status === 'loading'){
    return <div>Loading...</div>
  }



  if (user.data) {
    filteredData = data?.filter((d) => d.createdBy === user.data.uid);
  } else {
    filteredData = data;
  }
  
  let resArray = [];
  filteredData.forEach((doc) => {
    const reservation = {
      title: doc.title,
      start: doc.start.toDate(),
      end: doc.end.toDate(),
      createdBy: doc.createdBy,
      facilityId: doc.facilityId,
      resource: doc.resource,
      NO_ID_FIELD: doc.NO_ID_FIELD,
      allDay: doc.allDay
    };
    resArray.push(reservation);
  })
    console.log(resArray)

  if (onClickReservation){
    selectReservation = handleChangeReservation
  }

  return (
    <div>
<Grid container spacing={2}>
  
  {resArray.map((d) => {
    return (
      <Grid item xs={4}>
        <Reservation
          key={d.NO_ID_FIELD}
          id={d.NO_ID_FIELD}
          title={d.title}
          start={d.start}
          end={d.end}
          handleSelect={selectReservation}
        />
      </Grid>
    );
  })}
</Grid>
    </div>
  );
}