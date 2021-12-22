import React, {useState} from "react";
import { useSigninCheck, useUser, useFirestore } from "reactfire";
import { collection, deleteDoc } from "firebase/firestore";
import SignInForm from "./UserComponents/SignInForm";
import SignOutButton from "./UserComponents/SignOutButton";
import SignUpForm from "./UserComponents/SignUpForm";
import Button from '@mui/material/Button'
import ReservationList from './UtilityComponents/ReservationList'
import ReservationDetail from "./UtilityComponents/ReservationDetail";

export default function User(){

  const [signUp, setSignUp] = useState(false);
  const dataRef = collection(useFirestore(), 'reservations')
  const [selectedReservation, setSelectedReservation] = useState(null);
  const {status, data: SignInCheckResult} = useSigninCheck();
  const user = useUser();
  let reservations = null;



  const handleChangeSelectedReservation = (id) => {
    setSelectedReservation(id)
  }

  const doDeleteReservation = async (id) =>{

    try{
      await deleteDoc(dataRef, id)
    }catch(e){
      alert("Error: " + e.message)
    }
  }
  
  
  if (status === 'loading'){
    return <span>Loading...</span>
  }

  if (selectedReservation === null){
    reservations = <ReservationList user={user} onClickReservation={handleChangeSelectedReservation} />
  } else{
    reservations = <ReservationDetail user={user} reservationId={selectedReservation} handleDelete={doDeleteReservation} />
  }
  
  if (SignInCheckResult.signedIn === true){
    return(
      <div>
        <p>welcome {user.data?.email}</p>
        <SignOutButton />
        <hr />
        {reservations}
      </div>
      )
    } else if (SignInCheckResult.signedIn === false  && signUp === false){
      return(
        <div>
          <h2>Log in</h2>
          <SignInForm />
          <Button variant='outlined' onClick={() => setSignUp(!signUp)}>Register</Button>
        </div>
      )
    } else{
      return (
        <div>
          <h2>Register Email</h2>
          <SignUpForm />
          <Button variant='outlined' onClick={() => setSignUp(!signUp)}>Sign In</Button>
        </div>
      )
    }
  }