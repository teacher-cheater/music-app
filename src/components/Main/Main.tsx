import cls from "./main.module.css";
import Link from "next/link";
import Image from "next/image";
import Playlist from "@/components/Playlist/Playlist";
import Centerblock from "../Centerblock/Centerblock";

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
      <div className={cls.main__sidebar}>
        <div className={cls.sidebar__personal}>
          <p className={cls.sidebar__personalName}>Sergey.Ivanov</p>
          <div className={cls.sidebar__icon}>
            <svg>
              <use xlinkHref="/img/icon/sprite.svg#logout"></use>
            </svg>
          </div>
        </div>
        <div className={cls.sidebar__block}>
          <div className={cls.sidebar__list}>
            <div className={cls.sidebar__item}>
              <Link className={cls.sidebar__link} href="#">
                <Image
                  className={cls.sidebar__img}
                  src="/img/playlist01.png"
                  alt="day's playlist"
                  width={250}
                  height={170}
                />
              </Link>
            </div>
            <div className={cls.sidebar__item}>
              <Link className={cls.sidebar__link} href="#">
                <Image
                  className={cls.sidebar__img}
                  src="/img/playlist02.png"
                  alt="day's playlist"
                  width={250}
                  height={170}
                />
              </Link>
            </div>
            <div className={cls.sidebar__item}>
              <Link className={cls.sidebar__link} href="#">
                <Image
                  className={cls.sidebar__img}
                  src="/img/playlist03.png"
                  alt="day's playlist"
                  width={250}
                  height={170}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
