import React from "react";
import BurritoTaste from "./BurritoTaste";
import {  getFirestore } from 'firebase/firestore';
import {
  FirestoreProvider,
  useFirebaseApp
} from 'reactfire';

function App() {
  const firestoreInstance = getFirestore(useFirebaseApp());
  return (
    <FirestoreProvider sdk={firestoreInstance}>
      <h1>🌯</h1>
      <BurritoTaste />
    </FirestoreProvider>
  );
}

export default App;