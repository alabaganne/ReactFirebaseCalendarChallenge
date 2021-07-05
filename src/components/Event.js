import React from "react";

export default function Event({ event, deleteEvent }) {
  let borderColor, backgroundColor;
  if (event.color === "purple") {
    backgroundColor = "rgba(133, 118, 237, 0.15)";
    borderColor = "rgba(133, 118, 237, 1)";
  } else if (event.color === "orange") {
    backgroundColor = "rgba(238, 165, 124, 0.15)";
    borderColor = "rgba(238, 165, 124, 1)";
  } else {
    backgroundColor = "rgba(61, 131, 249, 0.15)"; // blue
    borderColor = "rgba(61, 131, 249, 1)";
  }

  // ! I couldn't figure out why this function fires when the components mounts so I commented the line responsible for deleting the event to prevent it from deleting all the events on mount.
  function handleDeleteEvent(event) {
    console.log("debug");
    // deleteEvent(id);
  }

  return (
    <div
      className="event"
      style={{
        top: (event.startsAt - 9) * 6 + "rem",
        height: (event.endsAt - event.startsAt) * 6 + "rem",
        backgroundColor,
        borderColor,
      }}
    >
      <div>{event.text}</div>
      <button onClick={handleDeleteEvent(event)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
}
