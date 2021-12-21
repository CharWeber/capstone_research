import React from "react";
import Reservation from "./Reservation";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { collection } from "firebase/firestore";


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
  console.log(user.data.uid)


  if (user) {
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
      
      {resArray.map((d) => {
        return (
          <Reservation
            key={d.NO_ID_FIELD}
            id={d.NO_ID_FIELD}
            title={d.title}
            start={d.start}
            end={d.end}
            handleSelect={selectReservation}
          />
        );
      })}
    </div>
  );
}