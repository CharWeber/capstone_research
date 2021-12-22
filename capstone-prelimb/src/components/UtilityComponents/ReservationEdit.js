// import React from 'react';


// const MyContainer = ({ className, children }) => {
//   return (
//     <div style={{ padding: "16px", background: "#216ba5", color: "#fff", zIndex: '2' }}>
//       <CalendarContainer className={className}>
//         <div style={{ background: "#f0f0f0" }}>
//           What is your favorite day?
//         </div>
//         <div style={{ position: "relative" }}>{children}</div>
//       </CalendarContainer>
//     </div>
//   );};

// export default function ReservationEdit(props){
// const {data, setNewReservation} = props



//   return(
//     <div>
//     <Input
//       type="text"
//       placeholder="Add Title"
//       style={{ width: "20%", marginRight: "10px" }}
//       value={data.title}
//       onChange={(e) =>
//         setNewReservation({ ...newReservation, title: e.target.value })
//       }
//     />
//     <Checkbox
//       name='allDay'
//       value={data.allDay}
//       onChange={() =>
//         setNewReservation({ ...newReservation, allDay: !newReservation.allDay })
//       }
//     />
//     <DatePicker
//       required
//       placeholderText="Start Time"
//       showTimeSelect
//       calendarContainer={MyContainer}
//       selected={data.start}
//       onChange={(start) => setNewReservation({ ...newReservation, start })}
//     />
//     <DatePicker
//       placeholderText="End Time"
//       showTimeSelect
//       calendarContainer={MyContainer}
//       selected={data.end}
//       onChange={(end) => setNewReservation({ ...newReservation, end })}
//     />
//     <Button variant="outlined" onClick={() => doditReservation()}>
//       Confirm Reservation
//     </Button>

//   </div>
//   );
// }