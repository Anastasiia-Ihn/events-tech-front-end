import { useEffect, useState } from "react";
import css from "./ModalListUsers.module.css";
import { getAllUsers } from "../../helpers/sendDataUser";
import CardUser from "../CardUser/CardUser";

const ModalListUsers = ({ eventId, onClose }) => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const users = await getAllUsers(eventId);
        if (!users) {
          console.log("no have");
        }

        setAllUsers(users);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUsers();
  }, [eventId]);

  return (
    <div className={css.wrapper}>
      <h2>Participants</h2>
      <button className={css.closeBtn} type="button" onClick={onClose}>
        X
      </button>
      <ul>
        {allUsers.length ? (
          allUsers?.map((el) => <CardUser key={el.email} user={el} />)
        ) : (
          <p>There are no members here yet.</p>
        )}
        {}
      </ul>
    </div>
  );
};

export default ModalListUsers;
