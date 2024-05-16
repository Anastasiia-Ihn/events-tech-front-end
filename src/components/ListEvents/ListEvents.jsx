import css from "./ListEvents.module.css";

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import CardEvent from "../CardEvent/CardEvent";
import { getAllEvents } from "../../helpers/getData";
import { Loader } from "../Loader/Loader";

const ListEvents = () => {
  const [events, setEvents] = useState([]);
  const [isMoreEvents, setIsMoreEvents] = useState(false);
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

        if (!eventsAll) {
          setIsMoreEvents(false);
          throw Error("Sorry");
        }
        setIsMoreEvents(true);

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
      {!isMoreEvents && <Loader />}
      <ul className={css.list}>
        {events?.map((el) => (
          <CardEvent key={Date.now() * Math.random()} event={el} />
        ))}
      </ul>
      {isMoreEvents && (
        <button className={css.btnMore} onClick={handleNextPage}>
          LoadMore
        </button>
      )}
    </>
  );
};

export default ListEvents;
