import React, {useState} from 'react';
import ReservationDetail from '../UtilityComponents/ReservationDetail';
import ReservationList from '../UtilityComponents/ReservationList';
import User from '../User';
import { useFirestore, useUser } from "reactfire";
import {  deleteDoc, doc } from "firebase/firestore";
import { Container } from '@mui/material';



export default function UserControl(){

  const user = useUser();
  const firestore = useFirestore()
  const [selectedReservation, setSelectedReservation] = useState(null);
  let reservations = null;
  

  const handleChangeSelectedReservation = (id) => {
    setSelectedReservation(id)
  }
  const doDeleteReservation = async (id) =>{
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
    reservations = <ReservationDetail user={user} onClickReturn={handleChangeSelectedReservation} reservationId={selectedReservation} handleDelete={doDeleteReservation} />
  }
}





  return(
    <div>
      <Container>
        <User />
        {reservations}
      </Container>
    </div>
  )
}