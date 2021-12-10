
import {  getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database';
import {FirestoreProvider, useFirebaseApp, AuthProvider, DatabaseProvider} from 'reactfire';
import MainRouter from './MainRouter'


function App() {

  const firestoreInstance = getFirestore(useFirebaseApp());
  const db = getDatabase();
  const auth = getAuth();
  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={firestoreInstance}>
        <DatabaseProvider sdk={db}>
          <MainRouter />
        </DatabaseProvider>
      </FirestoreProvider>
    </AuthProvider>
  );
}

export default App;