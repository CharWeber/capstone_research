import React, {useState} from 'react';
import ReservationDetail from '../UtilityComponents/ReservationDetail';
import ReservationList from '../UtilityComponents/ReservationList';
import User from '../User';
import { useFirestore, useUser } from "reactfire";
import {  deleteDoc, doc } from "firebase/firestore";


export default function UserControl(){

  const user = useUser();
  const firestore = useFirestore()
  const [selectedReservation, setSelectedReservation] = useState(null);
  let reservations = null;
  

  const handleChangeSelectedReservation = (id) => {
    setSelectedReservation(id)
  }
  const doDeleteReservation = async (id) =>{
    console.log(id)
    setSelectedReservation(null)
    try{
      await deleteDoc(doc(firestore, 'reservations', id))
    }catch(e){
      alert("Error: " + e.message)
    }
  }

if (user.data){
  if (selectedReservation === null){
    reservations = <ReservationList user={user} onClickReservation={handleChangeSelectedReservation} />
  } else{
    reservations = <ReservationDetail user={user} reservationId={selectedReservation} handleDelete={doDeleteReservation} />
  }
}





  return(
    <div>
      <User />
      {reservations}
    </div>
  )
}