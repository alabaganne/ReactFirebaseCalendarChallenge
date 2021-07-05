import React, { useState } from "react";

export default function CreateEventModal({ createEvent }) {
  const [active, setActive] = useState(false);

  function toggleModal() {
    setActive(!active);
  }

  const [newEvent, setNewEvent] = useState({});
  function handleInputChange(event) {
    const target = event.target;
    const { name, value } = target;

    let data = newEvent;
    data[name] = value;

    setNewEvent(data);
  }

  const [errorMessages, setErrorMessages] = useState([]);
  function handleCreateEvent() {
    setErrorMessages([]);
    let localErrorMessages = [];
    if (
      !newEvent.day ||
      !newEvent.month ||
      !newEvent.year ||
      !newEvent.startsAt ||
      !newEvent.endsAt ||
      !newEvent.text
    )
      localErrorMessages.push("Please fill all the fields first.");
    if (newEvent.year < 0) localErrorMessages.push("The year is invalid.");
    if (newEvent.month < 1 || newEvent.month > 12)
      localErrorMessages.push("The month is invalid.");
    // TODO: Complete the other validation rules

    console.log(localErrorMessages);
    if (localErrorMessages.length > 0) {
      setErrorMessages(localErrorMessages);
      return;
    }

    createEvent(newEvent);
    setNewEvent({});
  }

  return (
    <>
      <button className="add-event-toggler" onClick={toggleModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
      <div
        className="modal-container"
        style={{ display: active ? "block" : "none" }}
      >
        <div className="modal">
          <h2>Add event!</h2>
          {errorMessages.length ? (
            <ul>
              {errorMessages.map((msg) => (
                <li key={msg}>{msg}</li>
              ))}
            </ul>
          ) : (
            ""
          )}
          <form>
            <input
              type="number"
              name="day"
              placeholder="Day"
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="month"
              placeholder="Month"
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="year"
              placeholder="Year"
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="startsAt"
              placeholder="Starts At (hour)"
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="endsAt"
              placeholder="Ends At (hour)"
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="text"
              placeholder="Event text"
              onChange={handleInputChange}
            />
          </form>
          <div className="footer">
            <button className="cancel" onClick={toggleModal}>
              Cancel
            </button>
            <button className="add" onClick={handleCreateEvent}>
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
