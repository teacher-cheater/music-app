"use client";

import Link from "next/link";
import cls from "./track.module.css";
import { useAppDispatch } from "@/store/store";
import { TrackType } from "@/sharedtypes/sharedTypes";
import { setCurrentTrack } from "@/store/features/trackSlice";

interface TrackProps {
  track: TrackType;
}

const formatDuration = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
};

const Track: React.FC<TrackProps> = ({ track }) => {
  const { name, author, album, duration_in_seconds } = track;
  const dispatch = useAppDispatch();
  const onClickTrack = () => {
    dispatch(setCurrentTrack(track));
  };

  return (
    <div className={cls.playlist__item} onClick={() => onClickTrack()}>
      <div className={cls.playlist__track}>
        <div className={cls.track__title}>
          <div className={cls.track__titleImage}>
            <svg className={cls.track__titleSvg}>
              <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
            </svg>
          </div>
          <div className={cls.track__titleText}>
            <Link className={cls.track__titleLink} href="">
              {name} <span className={cls.track__titleSpan} />
            </Link>
          </div>
        </div>
        <div className={cls.track__author}>
          <Link className={cls.track__authorLink} href="">
            {author}
          </Link>
        </div>
        <div className={cls.track__album}>
          <Link className={cls.track__albumLink} href="">
            {album}
          </Link>
        </div>
        <div className={cls.track__time}>
          <svg className={cls.track__timeSvg}>
            <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
          </svg>
          <span className={cls.track__timeText}>
            {formatDuration(duration_in_seconds)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Track;
