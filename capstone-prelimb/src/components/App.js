import React from "react";
import {  getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'
import {FirestoreProvider, useFirebaseApp, AuthProvider} from 'reactfire';
import BurritoTaste from "./BurritoTaste";

function App() {

  const firestoreInstance = getFirestore(useFirebaseApp());
  const auth = getAuth();
  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={firestoreInstance}>
          <BurritoTaste />
      </FirestoreProvider>
    </AuthProvider>
  );
}

export default App;