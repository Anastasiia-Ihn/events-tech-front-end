import css from "./Register.module.css";
import { useForm } from "react-hook-form";

const Register = () => {
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
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className={css.wrapper}>
      <h2>Event registration</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="fullName">Full name</label>
        <input id="fullName" {...register("fullName", { required: true })} />
        {errors.fullName && <span>This field is required</span>}

        <label htmlFor="email">E-mail</label>

        <input id="email" {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}

        <label htmlFor="birth">Birthday</label>
        <input id="birth" {...register("birth")} />

        <div>
          <input
            id="socMedia"
            type="radio"
            name="hearUs"
            value="social media"
            {...register("hearUs")}
          />
          <label htmlFor="socMedia"> Social media</label>

          <input
            id="friends"
            type="radio"
            name="hearUs"
            value="friends"
            {...register("hearUs")}
          />
          <label htmlFor="friends">Friends</label>

          <input
            id="myself"
            type="radio"
            name="hearUs"
            value="found myself"
            {...register("hearUs")}
          />
          <label htmlFor="myself">Found myself</label>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Register;
