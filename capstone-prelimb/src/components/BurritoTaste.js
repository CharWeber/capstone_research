import React from "react";
import SignInForm from "./SignInForm";
import { doc } from 'firebase/firestore';
import { useFirestoreDocData, useFirestore, useSigninCheck } from 'reactfire';



function BurritoTaste() {
  // easily access the Firestore library
  const burritoRef = doc(useFirestore(), 'tryreactfire', 'burrito');
  const { status, data: signInCheckResult} = useSigninCheck();
  const { data: yummy } = useFirestoreDocData(burritoRef);
  if (status === 'loading') {
    return <span>loading...</span>;
  }

  if (signInCheckResult.signedIn === true) {
    return  <p>The burrito is {yummy ? 'good' : 'bad'}!</p>;
  } else {
    return <SignInForm />;
  }



}
export default BurritoTaste;