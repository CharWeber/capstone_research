import React, { useState } from "react";
import { Button, Input, Checkbox, Divider, Card, CardContent, CardActions, Typography } from "@mui/material";
import { doc, setDoc } from "firebase/firestore";
import { useFirestore, useFirestoreDocDataOnce } from "reactfire";
import DatePicker, {CalendarContainer} from "react-datepicker";




const MyContainer = ({ className, children }) => {
  return (
    <div style={{ padding: "16px", background: "#216ba5", color: "#fff", zIndex: '2' }}>
      <CalendarContainer className={className}>
        <div style={{ background: "#f0f0f0" }}>
          What is your favorite day?
        </div>
        <div style={{ position: "relative" }}>{children}</div>
      </CalendarContainer>
    </div>
  );};


export default function ReservationDetail(props) {
  const { reservationId, handleDelete, onClickReturn } = props;

  const docRef = doc(useFirestore(), "reservations", reservationId);
  const { status, data } = useFirestoreDocDataOnce(docRef);

  const [IsLoaded, setIsLoaded] = useState(false);
  const [resForm, setResForm] = useState(false);
  const [newReservation, setNewReservation] = useState({
    title: "",
    start: new Date(),
    end: new Date(),
    allDay: false,
    createdBy: null,
    facilityId: null,
    resource: null,
    department: data?.department ? data.department : null,
  });


  const handleDataLoad = () => {
    setNewReservation({
      title: data.title,
      start: data.start.toDate(),
      end: data.end.toDate(),
      allDay: data.allDay,
      createdBy: data.createdBy,
      facilityId: data.facilityId,
      resource: null,
      department: data.department,
    });
    setIsLoaded(true)
  }



  let formVisible = null;
  if (status === "loading") {
    return <div>loading...</div>;
  }


  console.log(data)
  if (!IsLoaded){
    handleDataLoad();
  }


  const doEditReservation = async () => {
    try {
      await setDoc(docRef, newReservation);
    } catch (e) {
      alert("Error: " + e.message);
    }
  };

  const handleDeleteReservation =  (id) => {
  handleDelete(id);
  }



  if (resForm) {
    formVisible = (
      <div>
        <Input
          type="text"
          placeholder="Add Title"
          style={{ width: "20%", marginRight: "10px" }}
          defaultValue={data.title}
          onChange={(e) =>
            setNewReservation({ ...newReservation, title: e.target.value })
          }
        />
        <Checkbox
          name="allDay"
          value={data.allDay}
          onChange={() =>
            setNewReservation({
              ...newReservation,
              allDay: !newReservation.allDay,
            })
          }
        />
        <DatePicker
          placeholderText="Start Time"
          showTimeSelect
          calendarContainer={MyContainer}
          selected={data.start.toDate()}
          onChange={(start) => setNewReservation({ ...newReservation, start })}
        />
        <DatePicker
          placeholderText="End Time"
          showTimeSelect
          calendarContainer={MyContainer}
          selected={data.end.toDate()}
          onChange={(end) => setNewReservation({ ...newReservation, end })}
        />
        <Button variant="outlined" onClick={() => doEditReservation()}>
          Confirm Edits
        </Button>
      </div>
    );
  }

  return (
    <Card sx={{padding: '10px', width: 'fit-content', minWidth: '30vw', height: '10%', borderColor: '994B68', borderStyle: 'solid', backgroundColor: '#E0C9D1', borderRadius: '5px', margin: '10px', textAlign: 'left'}}>
    <CardContent>
      <Typography variant='h5' component='div'>{data.title}</Typography>
      <Divider />
      <Typography variant='h6' component='div'>Begins: {data.start.toDate().toDateString() + ' at ' + data.start.toDate().toLocaleTimeString('en-US')}</Typography>
      <Typography variant='h6' component='div'>Ends: {data.end.toDate().toDateString() + ' at ' + data.end.toDate().toLocaleTimeString('en-US')}</Typography>
      {formVisible}
      <CardActions>
      <Button onClick={() => setResForm(!resForm)}>Edit</Button>
      <Button variant="outlined" onClick={() => onClickReturn(null)}>
        Return
      </Button>
      <Button variant="contained" onClick={() =>handleDeleteReservation(reservationId)}>
        Delete Reservation
      </Button>
      </CardActions>
    </CardContent>
  </Card>
  );
}
