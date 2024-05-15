import css from "./CardEvent.module.css";

const CardEvent = ({ event }) => {
  const { title, description } = event;

  return (
    <div className={css.wrapperCard}>
      <h2>{title}</h2>
      <p>{description}</p>
      <button>Register</button>
      <button>View</button>
    </div>
  );
};

export default CardEvent;
