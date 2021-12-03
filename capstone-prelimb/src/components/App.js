import React from "react";
import {  getFirestore } from 'firebase/firestore';
import {FirestoreProvider, useFirebaseApp} from 'reactfire';
import { doc } from 'firebase/firestore';
import { useFirestoreDocData, useFirestore } from 'reactfire';

function BurritoTaste() {
  // easily access the Firestore library
  const burritoRef = doc(useFirestore(), 'tryreactfire', 'burrito');

  // subscribe to a document for realtime updates. just one line!
  const { status, data } = useFirestoreDocData(burritoRef);

  // easily check the loading status
  if (status === 'loading') {
    return <p>Fetching burrito flavor...</p>;
  }

  if (data === null){
    return <p>data is null</p>
  }

  return <p>The burrito is {data.yummy ? 'good' : 'bad'}!</p>;

}

function App() {
  const firestoreInstance = getFirestore(useFirebaseApp());
  return (
    <FirestoreProvider sdk={firestoreInstance}>
    <BurritoTaste />
    </FirestoreProvider>
  );
}

export default App;