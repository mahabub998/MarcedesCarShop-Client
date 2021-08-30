import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import EventsShow from "./EventsShow";

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className="row mt-5">
      {events.map((event) => (
        <EventsShow event={event}></EventsShow>
      ))}
    </div>
  );
};

export default Home;
