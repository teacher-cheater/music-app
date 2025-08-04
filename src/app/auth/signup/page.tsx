import cls from "./signup.module.css";
import Link from "next/link";

const Signup = () => {
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
      <input
        className={cls.modal__input}
        type="password"
        name="password"
        placeholder="Повторите пароль"
      />
      <div className={cls.errorContainer}></div>
      <button className={cls.modal__btnSignupEnt}>Зарегистрироваться</button>
    </>
  );
};

export default Signup;
