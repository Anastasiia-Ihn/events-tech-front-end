import { useEffect, useState } from "react";
import css from "./ModalListUsers.module.css";
import { getAllUsers } from "../../helpers/sendDataUser";

const ListUsers = ({ eventId, onClose }) => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getAllUsers(eventId);

        if (!users?.length) {
          setAllUsers([]);
          prompt("no have");
        }

        allUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, [allUsers, eventId]);

  return (
    <div className={css.wrapper}>
      <h2>Participants</h2>
      <button className={css.closeBtn} type="button" onClick={onClose}>
        X
      </button>
      <ul>
        {allUsers?.map((el) => (
          <li>{console.log(el)}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListUsers;
