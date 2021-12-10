import React from "react";
import Button from '@mui/material/Button'
import { collection, doc, addDoc, deleteDoc } from 'firebase/firestore';
import { useFirestore, useFirestoreCollectionData} from 'reactfire';


export default function Home() {
  const itemsRef = collection(useFirestore(), 'items');
  const {data, status} = useFirestoreCollectionData(itemsRef);
  
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
      <p>this is the homepage</p>
      <div>
      <Button variant='outlined' onClick={async () => doAddItem()}>Add Item </Button>
      </div>
      <div>
        {status === 'loading' ? <div>loading...</div> : null}
        {data?.map(d => (
          <div>
            <div key={d.NO_ID_FIELD}>{d.name}</div>
            <div><Button variant='outlined' onClick={ async () => doDeleteItem(d.NO_ID_FIELD)}>DELETE</Button></div>
          </div>
          ))}
      </div>
    </div>
  )
}