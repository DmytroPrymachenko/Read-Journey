import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import EyeOpenSvg from "../../images/EyeOpenSvg";
import EyeCloseSvg from "../../images/EyeCloseSvg";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useState } from "react";
import { Loader } from "../Loader/Loader";
import { signInThunk } from "../../store/auth/operations";
import { selectIsLoading } from "../../store/auth/selectors";
import { Link, useNavigate } from "react-router-dom";
import SvgFavicon from "../../images/favicon/SvgFavicon";

const schema = yup.object({
  email: yup
    .string()
    .email("Please write a valid email")
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
    .required("The email is required"),
  password: yup
    .string()
    .min(7, "The password must contain a minimum of 7 characters")
    .required("The password is required"),
});

export const Login = () => {
  const isLoading = useSelector(selectIsLoading);
  const [eye, setEye] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  function onSubmit({ email, password }) {
    dispatch(signInThunk({ email, password }))
      .unwrap()
      .then(() => {
        toast.success(`Welcome`);
        navigate("/recommended");
      })
      .catch((err) => {
        toast.error(err);
      });
  }

  return (
    <>
      {isLoading && <Loader />}
      <div>
        <SvgFavicon />
        <p>read journey</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <div> */}
        <h1>
          Expand your mind, reading <span> a book</span>
        </h1>
        {/* <p>
            Welcome back! Please enter your credentials to access your account
            and continue your search for a psychologist.
          </p>
        </div> */}
        <div>
          <label>
            <input placeholder="Mail:" type="text" {...register("email")} />
            <span>{errors.email?.message}</span>
          </label>
          <label>
            <input
              placeholder="Password:"
              type={eye ? "text" : "password"}
              {...register("password")}
            />
            <span>{errors.password?.message}</span>
            <button
              type="button"
              onClick={() => setEye(!eye)}
              aria-label="show or hide password"
            >
              {eye ? <EyeOpenSvg /> : <EyeCloseSvg />}
            </button>
          </label>
        </div>
        <div>
          <button name="submit" type="submit" aria-label="Log In">
            Log In
          </button>
          <Link to={"/register"}>Don’t have an account?</Link>
        </div>
      </form>
    </>
  );
};
