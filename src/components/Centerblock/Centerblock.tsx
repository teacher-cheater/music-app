import React from "react";
import Playlist from "../Playlist/Playlist";
import cls from "./centerblock.module.css";
import Search from "../Search/Search";

const Centerblock = () => {
  return (
    <div className={cls.centerblock}>
      <Search />
      <h2 className={cls.centerblock__h2}>Треки</h2>
      <div className={cls.centerblock__filter}>
        <div className={cls.filter__title}>Искать по:</div>
        <div className={cls.filter__button}>исполнителю</div>
        <div className={cls.filter__button}>году выпуска</div>
        <div className={cls.filter__button}>жанру</div>
      </div>
      <div className={cls.centerblock__content}>
        <div className={cls.content__title}>
          <div className={`${cls.playlistTitle__col} ${cls.col01}`}>Трек</div>
          <div className={`${cls.playlistTitle__col} ${cls.col02}`}>
            Исполнитель
          </div>
          <div className={`${cls.playlistTitle__col} ${cls.col03}`}>Альбом</div>
          <div className={`${cls.playlistTitle__col} ${cls.col04}`}>
            <svg className={cls.playlistTitle__svg}>
              <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </div>
        <Playlist />
      </div>
    </div>
  );
};

export default Centerblock;
