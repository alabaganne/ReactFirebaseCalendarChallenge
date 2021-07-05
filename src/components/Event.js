export default function Event({ event, deleteEvent }) {
  let borderColor, backgroundColor;
  if (event.color === "purple") {
    backgroundColor = "rgba(133, 118, 237, 0.15)";
    borderColor = "rgba(133, 118, 237, 1)";
  } else if (event.color === "blue") {
    backgroundColor = "rgba(61, 131, 249, 0.15)";
    borderColor = "rgba(61, 131, 249, 1)";
  } else if (event.color === "orange") {
    backgroundColor = "rgba(238, 165, 124, 0.15)";
    borderColor = "rgba(238, 165, 124, 1)";
  } else {
    backgroundColor = "rgba(0, 0, 0, 0.15)";
    borderColor = "rgba(0, 0, 0, 1)";
  }

  function handleDeleteEvent(id) {
    deleteEvent(id);
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
      <button onClick={handleDeleteEvent(event.id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
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
