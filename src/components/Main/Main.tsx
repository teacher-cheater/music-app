"use client";

import cls from "./main.module.css";
import Link from "next/link";
import Centerblock from "../Centerblock/Centerblock";
import Sidebar from "../Sidebar/Sidebar";
import { getTracks } from "@/services/tracks/tracksApi";
import { useEffect, useState } from "react";
import { TrackType } from "@/sharedtypes/sharedTypes";
import { AxiosError } from "axios";

const Main = () => {
  const [allTracks, setAllTracks] = useState<TrackType[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTracks()
      .then(res => {
        setAllTracks(res);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        if (error instanceof AxiosError) {
          if (error.response) {
            setError(error.response.data);
          } else if (error.request) {
            setError("Что-то с интернетом");
          } else {
            setError("Неизвестная ошибка");
          }
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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
      <Centerblock allTracks={allTracks} isLoading={isLoading} />
      <Sidebar />
    </main>
  );
};

export default Main;
