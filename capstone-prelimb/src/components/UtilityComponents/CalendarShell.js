import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { useUser } from "reactfire";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
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
  const { events, dataRef, facility } = props;
  const user = useUser();

  const [resForm, setResForm] = useState(false);
  const [newReservation, setNewReservation] = useState({
    title: "",
    start: "",
    end: "",
    createdBy: user.data.uid,
    facility: facility,
  });

  let buttonOptions = null;
  let formDiv = null;

  const doAddReservation = async () => {
    try {
      await addDoc(dataRef, newReservation);
    } catch (e) {
      alert("Error: " + e.message);
    }
  };

  if (user.data) {
    buttonOptions = 
      <Button variant="outlined" onClick={() => setResForm(!resForm)}>
        Add Reservation
      </Button>
    
  } else if (resForm) {
    buttonOptions = 
    <div>
      <Button variant="outlined" onClick={() => doAddReservation()}>
        Confirm Reservation
      </Button>
      <Button variant="outlined" onClick={() => setResForm(!resForm)}>
        Return
      </Button>
    </div>
  }

  if (resForm) {
    formDiv = <div>
        <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newReservation.title} onChange={(e) => setNewReservation({ ...newReservation, title: e.target.value })} />
      <DatePicker placeholderText="Start Time" selected={newReservation.start} onChange={(end) => setNewEvent({ ...newReservation, end })} />
      <DatePicker placeholderText="End Time" selected={newReservation.end} onChange={(end) => setNewEvent({ ...newReservation, end })} />
    </div>;
  }

  return (
    <div>
      {formDiv}
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
