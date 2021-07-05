import React from "react";
import Event from "./Event";
import CreateEventModal from "./CreateEventModal";

export default function Events({ date, events, deleteEvent, createEvent }) {
  const months = [
    "January",
    "February",
    "Mars",
    "April",
    "May",
    "June",
    "July",
    "Augest",
    "September",
    "Octover",
    "November",
    "December",
  ];

  return (
    <>
      <div className="events-section">
        <header>
          <h2>{`${date.getDate()} ${months[date.getMonth()]}`}</h2>
          <CreateEventModal createEvent={createEvent} />
        </header>
        <main>
          <div className="hours-container">
            {[...Array(12)].map((_, i) => {
              return <div key={i}>{i + 9}:00</div>;
            })}
          </div>
          <div className="events-container">
            {events.map((event) => {
              return (
                <Event key={event.id} event={event} deleteEvent={deleteEvent} />
              );
            })}
            <div className="dividers">
              {[...Array(11)].map((_, i) => {
                return <div key={i}></div>;
              })}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
