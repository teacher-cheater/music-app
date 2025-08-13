"use client";
import Link from "next/link";
import cls from "./navigation.module.css";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useState } from "react";
import { clearUser } from "@/store/features/authSlice";
import { useRouter } from "next/navigation";
import { getTracks } from "@/services/tracks/tracksApi";
import { withReAuth } from "@/utils/withReAuth";

export default function Navigation() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const username = useAppSelector(state => state.auth.username);
  const [isOpen, setIsOpen] = useState(false);
  // const refresh = '';

  const toggleOpenModal = () => {
    setIsOpen(prev => !prev);
  };

  const logout = async () => {
    router.push("/auth/signin");
    dispatch(clearUser());
    // const data = await withReAuth(() => getTracks(),
    //   refresh,
    //   dispatch
    // );
  };

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
      <div className={cls.nav__burger} onClick={() => toggleOpenModal()}>
        <span className={`${cls.burger__line} ${isOpen ? cls.active : ""}`} />
        <span className={`${cls.burger__line} ${isOpen ? cls.active : ""}`} />
        <span className={`${cls.burger__line} ${isOpen ? cls.active : ""}`} />
      </div>
      {isOpen && (
        <div className={cls.nav__menu}>
          <ul className={cls.menu__list}>
            <li className={cls.menu__item}>
              <Link href="/music/main" className={cls.menu__link}>
                Главная
              </Link>
            </li>
            <li className={cls.menu__item}>
              <Link href="/music/favorites" className={cls.menu__link}>
                Мой плейлист
              </Link>
            </li>
            <li className={cls.menu__item}>
              {username ? (
                <span className={cls.menu__link} onClick={() => logout()}>
                  Выйти
                </span>
              ) : (
                <Link href="/auth/signin" className={cls.menu__link}>
                  Войти
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
