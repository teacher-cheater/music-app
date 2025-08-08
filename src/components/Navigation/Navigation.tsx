import Link from "next/link";
import cls from "./navigation.module.css";

export default function Navigation() {
  return (
    <nav className={cls.main__nav}>
      <div className={cls.nav__logo}>
        {/* <Image
          width={250}
          height={170}
          className={"logo__image"}
          src="/img/logo.png"
          alt={"logo"}
        /> */}
      </div>
      <div className={cls.nav__burger}>
        <span className={cls.burger__line}></span>
        <span className={cls.burger__line}></span>
        <span className={cls.burger__line}></span>
      </div>
      <div className={cls.nav__menu}>
        <ul className={cls.menu__list}>
          <li className={cls.menu__item}>
            <Link href="#" className={cls.menu__link}>
              Главное
            </Link>
          </li>
          <li className={cls.menu__item}>
            <Link href="#" className={cls.menu__link}>
              Мой плейлист
            </Link>
          </li>
          <li className={cls.menu__item}>
            <Link href="/auth/signin" className={cls.menu__link}>
              Войти
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
