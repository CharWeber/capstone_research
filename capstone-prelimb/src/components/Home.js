import React from "react";
import { getAuth } from 'firebase/auth'
import { collection } from 'firebase/firestore';
import { useFirestore, useFirestoreCollectionData} from 'reactfire';

export default function Home() {
  const auth = getAuth();
  const itemsRef = collection(useFirestore(), 'items');
  const {data, status} = useFirestoreCollectionData(itemsRef);

  
  function doAddItem(){

  }
  return(
    <div>
      <p>this is the homepage for {auth.currentUser.email}</p>
      <button onClick={async () => await auth.signOut()}>LogOut</button>

      <div>
        <button onClick={async() => doAddItem()}>Add Item</button>
      </div>
      <div>
        {status === 'loading' ? <div>loading...</div> : null}
        {data?.map(d => (
          <div key={d.NO_ID_FIELD}>{d.name}</div>
          ))}
      </div>
    </div>
  )
}