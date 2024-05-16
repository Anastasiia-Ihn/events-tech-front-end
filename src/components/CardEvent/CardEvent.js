import { useState } from "react";
import Modal from "react-modal";

import css from "./CardEvent.module.css";
import Register from "../Register/Register";
import ListEvents from "../ListEvents/ListEvents";

const CardEvent = ({ event }) => {
  const { _id, title, description } = event;
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModalUsers, setIsOpenModalUsers] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  const onClickRegister = () => {
    setIsOpen(true);
  };

  const closeModalUsers = () => {
    setIsOpenModalUsers(false);
  };
  const onClickViewUsers = () => {
    setIsOpenModalUsers(true);
  };

  return (
    <>
      <div className={css.wrapperCard}>
        <h2>{title}</h2>
        <p>{description}</p>
        <button type="button" onClick={onClickRegister}>
          Register
        </button>
        <button type="button" onClick={onClickViewUsers}>
          View
        </button>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
        ariaHideApp={false}
      >
        <Register onClose={closeModal} eventId={_id} />
      </Modal>
      <Modal
        isOpen={isOpenModalUsers}
        onRequestClose={closeModalUsers}
        className="modal-content"
        overlayClassName="modal-overlay"
        ariaHideApp={false}
      >
        <ListEvents onClose={closeModalUsers} eventId={_id} />
      </Modal>
    </>
  );
};

export default CardEvent;
