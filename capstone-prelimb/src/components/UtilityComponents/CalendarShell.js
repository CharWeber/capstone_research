import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Button, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { useUser, useFirestore, useFirestoreCollectionData } from "reactfire";
import DatePicker from "react-datepicker";
import { collection, addDoc } from "firebase/firestore";
import "react-datepicker/dist/react-datepicker.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

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
  const { facilityId, department } = props;
  const user = useUser();
  const dataRef = collection(useFirestore(), "reservations");
  const { status, data } = useFirestoreCollectionData(dataRef);

  const [resForm, setResForm] = useState(false);
  const [newReservation, setNewReservation] = useState({
    title: "",
    start: new Date(),
    end: new Date(),
    allDay: false,
    createdBy: user?.data ? user.data.uid : null,
    facilityId: facilityId ? facilityId : "general",
    resource: null,
    department: department ? department : null
  });

  useEffect(() => {
    setNewReservation({
      title: "",
      start: "",
      end: "",
      allDay: false,
      createdBy: user.data ? user.data.uid : null,
      facilityId: facilityId ? facilityId : "general",
      department: department ? department : null
    });
  }, [facilityId, user, department]);

  let events = null;
  let buttonOptions = null;
  let departmentData = null;
  // let tempArray = [];

  const doAddReservation = async () => {
    try {
      await addDoc(dataRef, newReservation);
    } catch (e) {
      alert("Error: " + e.message);
    }
    handleResetForm();
  };

  if (status === "loading") {
    return <div>loading...</div>;
  } else {
  }
  
  if (department){  
    departmentData = data?.filter(d => d.department === department);
  } else {
    departmentData = data
  }
  console.log(departmentData)

  const handleResetForm = () => {
    setResForm(false);
    setNewReservation({
      title: "",
      start: "",
      end: "",
      createdBy: user.data ? user.data.uid : null,
      facilityId: facilityId ? facilityId : "general",
      department: department ? department : null
    });
  };

  if (facilityId !== null) {
    // let tempArray = [];
    // const q = query(dataRef, where("facilityId", "==", facilityId));
    // getDocs(q).then((querySnapshot) =>
    //   // events = querySnapshot.map((doc) => {
    //   //   return {
    //   //     title: doc.data().title,
    //   //     start: doc.data().start.toDate(),
    //   //     end: doc.data().end.toDate(),
    //   //     createdBy: doc.data().createdBy,
    //   //     facility: doc.data().facility,
    //   //     resource: doc.data().resource,
    //   //   }
    //   // })
    //   querySnapshot.forEach((doc) => {
    //     const reservation = doc.map({
    //       title: doc.data().title,
    //       start: doc.data().start.toDate(),
    //       end: doc.data().end.toDate(),
    //       createdBy: doc.data().createdBy,
    //       facilityId: doc.data().facilityId,
    //       resource: doc.data().resource,
    //       NO_ID_FIELD: doc.NO_ID_FIELD,
    //       allDay: doc.allDay
    //     });
    //     console.log(reservation)
    //     tempArray = [...tempArray, reservation]
    //   })
    //   );
    //   events = tempArray;
    // CalendarDisplay = (
    //   <Calendar
    //     localizer={localizer}
    //     events={events}
    //     startAccessor="start"
    //     endAccessor="end"
    //     titleAccessor="title"
    //     allDayAccessor="allDay"
    //     views={["month", "week", "day"]}
    //     style={{ height: 500, margin: "50px" }}
    //   />
    // );
  let tempArray = []
    const filteredData = departmentData?.filter((d) => d.facilityId === facilityId)
    console.log(filteredData)
    filteredData.forEach((doc) => {
      const reservation = {
        title: doc.title,
        start: doc.start.toDate(),
        end: doc.end.toDate(),
        createdBy: doc.createdBy,
        facilityId: doc.facilityId,
        resource: doc.resource,
        NO_ID_FIELD: doc.NO_ID_FIELD,
        allDay: doc.allDay
      }
    tempArray.push(reservation)})
    events = tempArray;



  } else {
    let tempArray = [];
    departmentData.forEach((doc) => {
      const reservation = {
        title: doc.title,
        start: doc.start.toDate(),
        end: doc.end.toDate(),
        createdBy: doc.createdBy,
        facilityId: doc.facilityId,
        resource: doc.resource,
        NO_ID_FIELD: doc.NO_ID_FIELD,
        allDay: doc.allDay
      };
      tempArray.push(reservation);
    });
    events = tempArray;
    // CalendarDisplay = (
    //   <Calendar
    //     localizer={localizer}
    //     events={events}
    //     startAccessor="start"
    //     endAccessor="end"
    //     titleAccessor="title"
    //     allDayAccessor="allDay"
    //     views={["month", "day", "week"]}
    //     style={{ height: 500, margin: "50px" }}
    //   />
    // );
  }

  if (user.data && !resForm && facilityId) {
    buttonOptions = (
      <Button variant="outlined" onClick={() => setResForm(!resForm)}>
        Add Reservation
      </Button>
    );
  } else if (user.data && resForm) {
    buttonOptions = (
      <div>
        <Input
          type="text"
          placeholder="Add Title"
          style={{ width: "20%", marginRight: "10px" }}
          value={newReservation.title}
          onChange={(e) =>
            setNewReservation({ ...newReservation, title: e.target.value })
          }
        />

        <Input
          type="checkbox"
          name='allDay'
          style={{ width: "20%", marginRight: "10px" }}
          value={newReservation.allDay}
          onChange={(e) =>
            setNewReservation({ ...newReservation, allDay: !newReservation.allDay })
          }
        />
        <DatePicker
          placeholderText="Start Time"
          showTimeSelect
          selected={newReservation.start}
          onChange={(start) => setNewReservation({ ...newReservation, start })}
        />
        <DatePicker
          placeholderText="End Time"
          showTimeSelect
          selected={newReservation.end}
          onChange={(end) => setNewReservation({ ...newReservation, end })}
        />
        <Button variant="outlined" onClick={() => doAddReservation()}>
          Confirm Reservation
        </Button>
        <Button variant="outlined" onClick={() => setResForm(!resForm)}>
          Return
        </Button>
      </div>
    );
  }

  return (
    <div>
      {buttonOptions}

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        titleAccessor="title"
        allDayAccessor="allDay"
        views={["month", "day", "week"]}
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
}
