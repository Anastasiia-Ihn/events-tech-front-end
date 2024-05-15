import css from "./ListEvents.module.css";

import { useEffect, useState } from "react";
import CardEvent from "../CardEvent/CardEvent";
import { getAllEvents } from "../../getData/getData";

const ListEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const eventsAll = await getAllEvents();
        setEvents((prev) => [...prev, ...eventsAll]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <ul className={css.list}>
      {events?.map((el) => (
        <CardEvent key={Date.now()} event={el} />
      ))}
    </ul>
  );
};

export default ListEvents;
