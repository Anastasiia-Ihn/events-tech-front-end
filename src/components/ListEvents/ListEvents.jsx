import css from "./ListEvents.module.css";

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import CardEvent from "../CardEvent/CardEvent";
import { getAllEvents } from "../../helpers/getData";

const ListEvents = () => {
  const [events, setEvents] = useState([]);
  const [isMoreEvents, setIsMoreEvents] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const currentPage = searchParams.get("page") ?? "";

    if (currentPage === "") {
      setSearchParams({ page: 1 });
      return;
    }

    async function fetchData() {
      try {
        const eventsAll = await getAllEvents(currentPage);

        if (!eventsAll.length) {
          setIsMoreEvents(false);
          throw Error("Sorry");
        }

        setEvents((prev) => [...prev, ...eventsAll]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [searchParams, setSearchParams]);

  const handleNextPage = () => {
    const currentPage = searchParams.get("page");
    const nextPage = Number(currentPage) + 1;

    setSearchParams({ page: nextPage });
  };

  return (
    <>
      <ul className={css.list}>
        {events?.map((el) => (
          <CardEvent key={Date.now() * Math.random()} event={el} />
        ))}
      </ul>
      {isMoreEvents && <button onClick={handleNextPage}>LoadMore</button>}
    </>
  );
};

export default ListEvents;
