"use client";
import { useState } from "react";
import cls from "./signin.module.css";
import Link from "next/link";
import { authUser, getTokens } from "@/services/auth/authApi";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/store";
import {
  setAccessToken,
  setRefreshToken,
  setUsername,
} from "@/store/features/authSlice";

const Signin = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      return setErrorMessage("Заполните все поля");
    }

    if (!validateEmail(email)) {
      return setErrorMessage("Некорректный email");
    }

    setIsLoading(true);
    setErrorMessage("");

    authUser({ email, password })
      .then(() => {
        dispatch(setUsername(email));
        return getTokens({ email, password });
      })
      .then(res => {
        dispatch(setAccessToken(res.access));
        dispatch(setRefreshToken(res.refresh));
        router.push("/music/main/");
      })
      .catch(error => {
        if (error instanceof AxiosError) {
          if (error.response) {
            setErrorMessage(error.response.data.message);
          } else if (error.request) {
            setErrorMessage("Что-то с интернетом, попробуйте позже");
          } else {
            setErrorMessage("Неизвестная ошибка, попробуйте позже");
          }
        }
        setErrorMessage(error.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Link href="/music/main">
        <div className={cls.modal__logo}>
          <img src="/img/logo_modal.png" alt="logo" />
        </div>
      </Link>
      <input
        className={`${cls.modal__input} ${cls.login}`}
        type="text"
        name="login"
        value={email}
        placeholder="Почта"
        onChange={e => onChangeEmail(e)}
        disabled={isLoading}
      />
      <input
        className={cls.modal__input}
        type="password"
        name="password"
        value={password}
        placeholder="Пароль"
        onChange={e => onChangePassword(e)}
        disabled={isLoading}
      />
      {errorMessage && <div className={cls.errorContainer}>{errorMessage}</div>}
      <button
        disabled={isLoading}
        className={cls.modal__btnEnter}
        onClick={e => onSubmit(e)}
      >
        {isLoading ? "Загрузка..." : "Войти"}
      </button>
      <Link
        href={"/auth/signup"}
        className={`${cls.modal__btnSignup} ${
          isLoading ? cls.disabledLink : ""
        }`}
        tabIndex={isLoading ? -1 : 0}
      >
        Зарегистрироваться
      </Link>
    </>
  );
};

export default Signin;
