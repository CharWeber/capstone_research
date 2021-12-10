import React from "react";
import Button from "@mui/material/Button";
import { collection, doc, addDoc, deleteDoc } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import Grid from '@mui/material/Grid';



export default function Home() {
  const itemsRef = collection(useFirestore(), "items");
  const { data, status } = useFirestoreCollectionData(itemsRef);

  const doAddItem = async () => {
    try {
      await addDoc(itemsRef, { name: new Date().getTime() + "-NAME" });
    } catch (e) {
      alert("Error " + e.message);
    }
  };

  const doDeleteItem = async (id) => {
    try {
      await deleteDoc(doc(itemsRef, id));
    } catch (e) {
      alert("Error " + e.message);
    }
  };


  return(
    <div>
      <Button variant='outlined' onClick={async () => doAddItem()}>Add Item </Button>
      <br/>
      <br/>
      <Grid container spacing={2} rowHeight={500}>

          {status === 'loading' ? <div>loading...</div> : null}
          {data?.map(d => (
            <Grid item xs={6}>
              <div key={d.NO_ID_FIELD}>{d.name}</div>
              <div><Button variant='outlined' onClick={ async () => doDeleteItem(d.NO_ID_FIELD)}>DELETE</Button></div>
            </Grid>
            ))}
        </Grid>
    </div>
  )

}
