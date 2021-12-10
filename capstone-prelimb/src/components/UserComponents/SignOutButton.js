import React from "react";
import { getAuth } from 'firebase/auth'
import Button from '@mui/material/Button'

export default function SignOutButton(){
  const auth = getAuth();
return(
  <Button variant='contained' color='secondary' onClick={async () => await auth.signOut()}>LogOut</Button>
)
}