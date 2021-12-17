import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { useUser, useFirestore, useFirestoreCollectionData } from "reactfire";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import { collection, addDoc, query, getDocs, where } from "firebase/firestore";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function CalendarShell(props) {
  const { facilityId } = props;

  const user = useUser();
  const dataRef = collection(useFirestore(), "reservations");
  const { status, data } = useFirestoreCollectionData(dataRef);

  const [resForm, setResForm] = useState(false);
  const [newReservation, setNewReservation] = useState({
    title: "",
    start: "",
    end: "",
    createdBy: user.data ? user.data.uid : null,
    facility: facilityId ? facilityId : "general",
  });

  let events = [];
  let buttonOptions = null;

  if (status === "loading") {
    return <div>loading...</div>;
  }

  if (facilityId) {
    const q = query(dataRef, where("facility", "==", facilityId));
    getDocs(q).then((querySnapshot) =>
      querySnapshot.forEach((doc) => events.push(doc.data()))
    );
  } else {
    events = data;
  }

  const doAddReservation = async () => {
    try {
      await addDoc(dataRef, newReservation);
    } catch (e) {
      alert("Error: " + e.message);
    }
  };

  const handleChangeStartTime = (start) => {
    setNewReservation(...newReservation, start)
  }
  const handleChangeEndTime = (end) => {
    setNewReservation(...newReservation, end)
  }

  if (user.data && !resForm) {
    buttonOptions = 
      <Button variant="outlined" onClick={() => setResForm(!resForm)}>
        Add Reservation
      </Button>
    
  } else if (user.data && resForm) {
    buttonOptions = 
      <div>
        <Button variant="outlined" onClick={() => doAddReservation()}>
          Confirm Reservation
        </Button>
        <Button variant="outlined" onClick={() => setResForm(!resForm)}>
          Return
        </Button>
        <Input
          type="text"
          placeholder="Add Title"
          style={{ width: "20%", marginRight: "10px" }}
          value={newReservation.title}
          onChange={(e) =>
            setNewReservation({ ...newReservation, title: e.target.value })
          }
        />
        <DatePicker
          placeholderText="Start Time"
          
        />
        <DatePicker
          placeholderText="End Time"
          
        />
      </div>
    
  }

  return (
    <div>
      {buttonOptions}
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
}
