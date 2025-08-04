import cls from "./signin.module.css";
import Link from "next/link";

const Signin = () => {
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
      />
      <input
        className={cls.modal__input}
        type="password"
        name="password"
        placeholder="Пароль"
      />
      <div className={cls.errorContainer}></div>
      <button className={cls.modal__btnEnter}>Войти</button>
      <Link href={"/auth/sigup"} className={cls.modal__btnSignup}>
        Зарегистрироваться
      </Link>
    </>
  );
};

export default Signin;
