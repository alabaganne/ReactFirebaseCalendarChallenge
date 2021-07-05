import React, { useState, useEffect } from "react";
import "./scss/index.scss";

import Events from "./components/Events";
import DatePicker from "./components/DatePicker";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";

firebase.initializeApp({
  apiKey: "AIzaSyASyX28bkJnk7CwgehnuHhYSgSPep_D8PY",
  authDomain: "react-calendar-81c7d.firebaseapp.com",
  databaseURL:
    "https://react-calendar-81c7d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-calendar-81c7d",
  storageBucket: "react-calendar-81c7d.appspot.com",
  messagingSenderId: "541604819812",
  appId: "1:541604819812:web:dcf872c450188da9ff8071",
});

const firestore = firebase.firestore();

const eventsCollection = firestore.collection("events");

function App() {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    eventsCollection
      .where("day", "==", date.getDate())
      .where("month", "==", date.getMonth() + 1)
      .where("year", "==", date.getFullYear())
      .get()
      .then((querySnapshot) => {
        let data = [];
        querySnapshot.forEach((doc) => {
          data = [...data, { id: doc.id, ...doc.data() }];
        });

        setEvents(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [date]);

  function changeDate(date) {
    setDate(date);
  }

  function createEvent(event) {
    eventsCollection.add(event).then((ref) => {
      console.log("A new event has been added", event);
    });
  }

  function deleteEvent(id) {
    eventsCollection
      .doc(id)
      .delete()
      .then(() => {
        console.log("Event deleted successfully.");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="container">
      <Events
        date={date}
        events={events}
        createEvent={createEvent}
        deleteEvent={deleteEvent}
      />
      <DatePicker date={date} changeDate={changeDate} />
    </div>
  );
}

export default App;
