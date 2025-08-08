import Link from "next/link";
import cls from "./sidebar.module.css";
import Image from "next/image";
import Username from "../Username/Username";

export default function Sidebar() {
  interface Playlist {
    id: number;
    img: string;
  }

  const playlist: Playlist[] = [
    { id: 1, img: "/img/playlist01.png" },
    { id: 2, img: "/img/playlist02.png" },
    { id: 3, img: "/img/playlist03.png" },
  ];

  return (
    <div className={cls.main__sidebar}>
      <div className={cls.sidebar__personal}>
        <Username />
        <div className={cls.sidebar__icon}>
          <svg>
            <use xlinkHref="/img/icon/sprite.svg#logout" />
          </svg>
        </div>
      </div>
      <div className={cls.sidebar__block}>
        <div className={cls.sidebar__list}>
          {playlist.map(link => (
            <div className={cls.sidebar__item} key={link.id}>
              <Link
                className={cls.sidebar__link}
                href={`/music/category/${link.id}`}
              >
                <Image
                  className={cls.sidebar__img}
                  src={link.img}
                  alt="day's playlist"
                  width={250}
                  height={170}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
