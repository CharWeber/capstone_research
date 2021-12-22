import React, {useState} from "react";
import { useSigninCheck, useUser } from "reactfire";

import SignInForm from "./UserComponents/SignInForm";
import SignOutButton from "./UserComponents/SignOutButton";
import SignUpForm from "./UserComponents/SignUpForm";
import Button from '@mui/material/Button'


export default function User(){

  const [signUp, setSignUp] = useState(false);
  const {status, data: SignInCheckResult} = useSigninCheck();
  const user = useUser();
  let reservations = null;


  
  if (status === 'loading'){
    return <span>Loading...</span>
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