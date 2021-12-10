import React from "react";
import { getAuth } from 'firebase/auth'
import { getDatabase} from "firebase/database";
import { collection, doc, addDoc, deleteDoc } from 'firebase/firestore';
import { useFirestore, useFirestoreCollectionData, useFirebaseApp} from 'reactfire';


export default function Home(props) {
  const auth = getAuth();
  const db = getDatabase()
  const itemsRef = collection(useFirestore(), 'items');
  const {data, status} = useFirestoreCollectionData(itemsRef);
  
  console.log(db)
  const doAddItem = async () =>{
    try{
      await addDoc(itemsRef, {name: new Date().getTime() + "-NAME"})
    } catch(e){
      alert("Error " + e.message)
    }
  }

  const doDeleteItem = async (id) => {
    try{
      await deleteDoc(doc(itemsRef, id))
    } catch (e){
      alert('Error ' + e.message)
    }
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
          <div>
            <div key={d.NO_ID_FIELD}>{d.name}</div>
            <p><button onClick={ async () => doDeleteItem(d.NO_ID_FIELD)}>DELETE</button></p>
          </div>
          ))}
      </div>
    </div>
  )
}