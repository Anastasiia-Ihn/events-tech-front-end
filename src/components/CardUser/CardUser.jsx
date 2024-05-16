import css from "./CardUser.module.css";
const CardUser = ({ user }) => {
  const { fullName, email } = user;
  return (
    <div className={css.wrapper}>
      <h3>{fullName}</h3>
      <p>{email}</p>
    </div>
  );
};

export default CardUser;
