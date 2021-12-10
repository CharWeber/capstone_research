import React from "react";
import { useSigninCheck, useUser } from "reactfire";
import SignInForm from "./UserComponents/SignInForm";
import SignOutButton from "./UserComponents/SignOutButton";

export default function User(){
  
  const user = useUser();
  const {status, data: SignInCheckResult} = useSigninCheck();
  if (status === 'loading'){
    return <span>Loading...</span>
  }

  if (SignInCheckResult.signedIn === true){

    return(
      <div>
        <p>welcome {user.data?.email}</p>
        <SignOutButton />
      </div>
      )
    } else{
      return(
        <div>
          <p>Sign in</p>
          <SignInForm />
        </div>
      )
    }
}