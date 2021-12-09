
import {  getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'
import {FirestoreProvider, useFirebaseApp, AuthProvider} from 'reactfire';
import MainRouter from './MainRouter'


function App() {

  const firestoreInstance = getFirestore(useFirebaseApp());
  const auth = getAuth();
  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={firestoreInstance}>
          <MainRouter />
      </FirestoreProvider>
    </AuthProvider>
  );
}

export default App;