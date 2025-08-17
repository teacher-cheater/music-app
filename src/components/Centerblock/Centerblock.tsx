"use client";
import Search from "../Search/Search";
import FilterButtons from "../Filter/FilterButtons";
import cls from "./centerblock.module.css";
import { TrackType } from "@/sharedtypes/sharedTypes";
import Track from "../Track/Track";
import { useEffect } from "react";
import { useAppDispatch } from "@/store/store";
import { setPagePlaylist } from "@/store/features/trackSlice";

interface CenterblockProps {
  pagePlaylist: TrackType[];
  allTracks: TrackType[];
  isLoading: boolean;
  errorRes: null | string;
  title: string;
}

const Centerblock = ({
  pagePlaylist,
  allTracks,
  isLoading,
  errorRes,
  title,
}: CenterblockProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isLoading && !errorRes) {
      dispatch(setPagePlaylist(allTracks));
    }
  }, [isLoading, errorRes]);

  return (
    <div className={cls.centerblock}>
      <Search />
      <h2 className={cls.centerblock__h2}>{title}</h2>
      <FilterButtons />
      <div className={cls.centerblock__content}>
        <div className={cls.content__title}>
          <div className={`${cls.playlistTitle__col} ${cls.col01}`}>Трек</div>
          <div className={`${cls.playlistTitle__col} ${cls.col02}`}>
            Исполнитель
          </div>
          <div className={`${cls.playlistTitle__col} ${cls.col03}`}>Альбом</div>
          <div className={`${cls.playlistTitle__col} ${cls.col04}`}>
            <svg className={cls.playlistTitle__svg}>
              <use xlinkHref="/img/icon/sprite.svg#icon-watch" />
            </svg>
          </div>
        </div>
        <div className={cls.content__playlist}>
          {errorRes
            ? errorRes
            : isLoading
            ? "Загрузка..."
            : pagePlaylist.map(track => (
                <Track track={track} key={track._id} playlist={allTracks} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Centerblock;
