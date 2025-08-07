"use client";
import { useState } from "react";
import cls from "./signup.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authUser, registerUser } from "@/services/auth/authApi";
import { AxiosError } from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePasswords = () => {
    return password === confirmPassword;
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onChangeUsername= (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      return setErrorMessage("Заполните все поля");
    }

    if (!validateEmail(email)) {
      return setErrorMessage("Некорректный email");
    }

    if (!validatePasswords()) {
      return setErrorMessage("Пароли не совпадают");
    }

    if (password.length < 6) {
      return setErrorMessage("Пароль должен содержать минимум 6 символов");
    }

    setIsLoading(true);
    setErrorMessage("");

    registerUser({ email, password, username })
      .then(res => {
        console.log(res);
        router.push("/auth/signin?registered=true");
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
        placeholder="Почта"
        value={email}
        onChange={e => onChangeEmail(e)}
        disabled={isLoading}
      /> 
      <input
        className={`${cls.modal__input} ${cls.login}`}
        type="text"
        name="login"
        placeholder="Логин"
        value={username}
        onChange={e => onChangeUsername(e)}
        disabled={isLoading}
      />
      <input
        className={cls.modal__input}
        type="password"
        name="password"
        placeholder="Пароль"
        value={password}
        onChange={e => onChangePassword(e)}
        disabled={isLoading}
      />
      <input
        className={cls.modal__input}
        type="password"
        name="password"
        value={confirmPassword}
        placeholder="Повторите пароль"
        onChange={e => setConfirmPassword(e.target.value)}
        disabled={isLoading}
      />
      <div className={cls.errorContainer}>{errorMessage}</div>
      <button className={cls.modal__btnSignupEnt} onClick={e => onSubmit(e)}>
        {isLoading ? "Регистрация..." : "Зарегистрироваться"}
      </button>
    </>
  );
};

export default Signup;
