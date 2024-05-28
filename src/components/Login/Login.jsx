import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import EyeOpenSvg from "../../images/EyeOpenSvg";
import EyeCloseSvg from "../../images/EyeCloseSvg";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";
import { signInThunk } from "../../store/auth/operations";
import { selectIsLoading } from "../../store/auth/selectors";
import { Link, useNavigate } from "react-router-dom";
// import SvgFavicon from "../../images/favicon/SvgFavicon";
import { Container } from "../Layout/Layout.Styled";
// import { Logo } from "../Logo/Logo";
// import LogoTitleSvg from "../../images/LogoTitleSvg";
import {
  AuthForm,
  EnterWrap,
  InputWrap,
  LogoTitleSvgWrap,
  LogoWrap,
  Slogan,
  SubmitBlock,
} from "./Login.Styled";
import Logo from "../../images/Logo";
import LogoTitleSvg from "../../images/LogoTitleSvg";

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

  useEffect(() => {
    console.log(window.innerWidth);
  }, []);
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
      <Container>
        <EnterWrap>
          <LogoWrap>
            <Logo />
          </LogoWrap>
          <LogoTitleSvgWrap>
            <LogoTitleSvg />
          </LogoTitleSvgWrap>
          {/* {window.innerWidth < 768 ? <Logo /> : <LogoTitleSvg />} */}
          <AuthForm onSubmit={handleSubmit(onSubmit)}>
            {/* <div> */}
            <Slogan>
              Expand your mind, reading <span> a book</span>
            </Slogan>
            {/* <p>
            Welcome back! Please enter your credentials to access your account
            and continue your search for a psychologist.
          </p>
        </div> */}
            <InputWrap>
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
            </InputWrap>
            <SubmitBlock>
              <button name="submit" type="submit" aria-label="Log In">
                Log In
              </button>
              <Link to={"/register"}>Don’t have an account?</Link>
            </SubmitBlock>
          </AuthForm>
        </EnterWrap>
      </Container>
    </>
  );
};
