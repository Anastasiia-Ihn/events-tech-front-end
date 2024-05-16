import { useState } from "react";
import Modal from "react-modal";

import css from "./CardEvent.module.css";
import ModalRegister from "../ModalRegister/ModalRegister";
import ModalListUsers from "../ModalListUsers/ModalListUsers";

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
        <div className={css.wrapperText}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={css.wrapperBtn}>
          <button type="button" onClick={onClickRegister}>
            Register
          </button>
          <button type="button" onClick={onClickViewUsers}>
            View
          </button>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
        ariaHideApp={false}
      >
        <ModalRegister onClose={closeModal} eventId={_id} />
      </Modal>
      <Modal
        isOpen={isOpenModalUsers}
        onRequestClose={closeModalUsers}
        className="modal-content"
        overlayClassName="modal-overlay"
        ariaHideApp={false}
      >
        <ModalListUsers onClose={closeModalUsers} eventId={_id} />
      </Modal>
    </>
  );
};

export default CardEvent;
