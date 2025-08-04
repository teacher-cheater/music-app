import cls from "./main.module.css";
import Link from "next/link";
import Centerblock from "../Centerblock/Centerblock";
import Sidebar from "../Sidebar/Sidebar";

const Main = () => {
  return (
    <main className={cls.main}>
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
              {/*TODO: a -> Link*/}
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
              <Link href="../signin.html" className={cls.menu__link}>
                Войти
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Centerblock />
      <Sidebar />
    </main>
  );
};

export default Main;
