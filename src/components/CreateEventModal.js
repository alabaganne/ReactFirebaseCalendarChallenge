import React, { useState, useRef } from "react";

export default function CreateEventModal({ createEvent }) {
  const [active, setActive] = useState(false);
  const dayRef = useRef();
  const monthRef = useRef();
  const yearRef = useRef();
  const startsAtRef = useRef();
  const endsAtRef = useRef();
  const textRef = useRef();
  const colorRef = useRef();

  function toggleModal() {
    setActive(!active);
  }

  const [errorMessages, setErrorMessages] = useState([]);
  function handleCreateEvent() {
    const day = dayRef.current.value;
    const month = monthRef.current.value;
    const year = yearRef.current.value;
    const startsAt = startsAtRef.current.value;
    const endsAt = endsAtRef.current.value;
    const text = textRef.current.value;
    const color = colorRef.current.value;

    setErrorMessages([]);
    let localErrorMessages = [];
    if (!day) localErrorMessages.push("The day is invalid.");
    if (!month || month < 1 || month > 12)
      localErrorMessages.push("The month is invalid.");
    if (!year || year < 0) localErrorMessages.push("The year is invalid.");
    // TODO: Complete the other validation rules

    if (localErrorMessages.length > 0) {
      setErrorMessages(localErrorMessages);
      return;
    }

    const event = {
      day,
      month,
      year,
      startsAt,
      endsAt,
      text,
      color,
    };
    createEvent(event);

    dayRef.current.value = null;
    monthRef.current.value = null;
    yearRef.current.value = null;
    startsAtRef.current.value = null;
    endsAtRef.current.value = null;
    textRef.current.value = null;
    colorRef.current.value = null;

    toggleModal();
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
            <ul class="error-messages">
              {errorMessages.map((msg) => (
                <li key={msg}>{msg}</li>
              ))}
            </ul>
          ) : (
            ""
          )}
          <form>
            <input type="number" name="day" placeholder="Day" ref={dayRef} />
            <input
              type="number"
              name="month"
              placeholder="Month"
              ref={monthRef}
            />
            <input type="number" name="year" placeholder="Year" ref={yearRef} />
            <input
              type="number"
              name="startsAt"
              placeholder="Starts At (hour)"
              ref={startsAtRef}
            />
            <input
              type="number"
              name="endsAt"
              placeholder="Ends At (hour)"
              ref={endsAtRef}
            />
            <input
              type="text"
              name="text"
              placeholder="Event text"
              ref={textRef}
            />
            <select name="color" ref={colorRef}>
              <option default value="blue">
                Blue
              </option>
              <option value="purple">Purple</option>
              <option value="orange">Orange</option>
            </select>
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
