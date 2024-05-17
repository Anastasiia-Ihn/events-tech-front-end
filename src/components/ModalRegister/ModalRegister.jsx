import { sendDataUser } from "../../helpers/sendDataUser";
import css from "./ModalRegister.module.css";
import { useForm } from "react-hook-form";
import { userValidation } from "../../validation/userValidation";
import { joiResolver } from "@hookform/resolvers/joi";

const ModalRegister = ({ eventId, onClose }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      birth: "",
      hearUs: "",
    },
    resolver: joiResolver(userValidation),
  });

  const onSubmit = (data) => {
    sendDataUser(data, eventId);
    reset();
    onClose();
  };

  return (
    <div className={css.wrapper}>
      <h2>Event registration</h2>
      <button className={css.closeBtn} type="button" onClick={onClose}>
        X
      </button>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="fullName">Full name</label>
        <input id="fullName" {...register("fullName", { required: true })} />
        {errors.fullName && <span>This field is required</span>}

        <label htmlFor="email">E-mail</label>

        <input id="email" {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}

        <label htmlFor="birth">Birthday</label>
        <input id="birth" {...register("birth")} />
        <p>Where did you hear about this event?</p>
        <div className={css.wrapperRadio}>
          <label htmlFor="socMedia">
            <input
              id="socMedia"
              type="radio"
              name="hearUs"
              value="social media"
              {...register("hearUs")}
            />
            Social media
          </label>

          <label htmlFor="friends">
            <input
              id="friends"
              type="radio"
              name="hearUs"
              value="friends"
              {...register("hearUs")}
            />
            Friends
          </label>

          <label htmlFor="myself">
            <input
              id="myself"
              type="radio"
              name="hearUs"
              value="found myself"
              {...register("hearUs")}
            />
            Found myself
          </label>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ModalRegister;
