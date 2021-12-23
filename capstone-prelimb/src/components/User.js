import React, {useState} from "react";
import { useSigninCheck, useUser } from "reactfire";

import SignInForm from "./UserComponents/SignInForm";
import SignOutButton from "./UserComponents/SignOutButton";
import SignUpForm from "./UserComponents/SignUpForm";
import {Button, Typography, CircularProgress, Divider} from '@mui/material'


export default function User(){

  const [signUp, setSignUp] = useState(false);
  const {status, data: SignInCheckResult} = useSigninCheck();
  const user = useUser();



  
  if (status === 'loading'){
    return <CircularProgress color='secondary' />
  }

  
  if (SignInCheckResult.signedIn === true){
    return(
      <div style={{textAlign: 'center'}}>
        <Typography variant='h4' component='div'>
          welcome {user.data?.email}
        </Typography>
        <SignOutButton />
        <Divider />
        <Typography variant='body' component='div'>Your Reservations</Typography>
        

      </div>
      )
    } else if (SignInCheckResult.signedIn === false  && signUp === false){
      return(
        <div >
          <Typography variant='h4' component='div'>
            Log in
          </Typography>
          <SignInForm />
          <Button variant='outlined' onClick={() => setSignUp(!signUp)}>Register</Button>
        </div>
      )
    } else{
      return (
        <div >
          <Typography variant='h4' component='div'>
            Register
          </Typography>      
          <SignUpForm />
          <Button variant='outlined' onClick={() => setSignUp(!signUp)}>Sign In</Button>
        </div>
      )
    }
  }