"use client";

import Link from "next/link";
import cls from "./track.module.css";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { TrackType } from "@/sharedtypes/sharedTypes";
import { setCurrentTrack, setIsPlay } from "@/store/features/trackSlice";
import { formatDuration } from "@/utils/helpers";

interface TrackProps {
  track: TrackType;
}

const Track = ({ track }: TrackProps) => {
  const { name, author, album, duration_in_seconds } = track;
  const currentTrack = useAppSelector(state => state.tracks.currentTrack);
  const isPlay = useAppSelector(state => state.tracks.isPlay);
  const dispatch = useAppDispatch();

  const isCurrentTrackPlaying = currentTrack?._id === track._id && isPlay;

  const onClickTrack = () => {
    if (currentTrack?._id === track._id) {
      dispatch(setIsPlay(!isPlay));
    } else {
      dispatch(setCurrentTrack(track));
      dispatch(setIsPlay(true));
    }
  };

  return (
    <div className={cls.playlist__item} onClick={() => onClickTrack()}>
      <div className={cls.playlist__track}>
        <div className={cls.track__title}>
          <div className={cls.track__titleImage}>
            {isCurrentTrackPlaying ? (
              <div className={cls.track__active}>
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
            ) : (
              <svg className={cls.track__titleSvg}>
                <use xlinkHref="/img/icon/sprite.svg#icon-note" />
              </svg>
            )}
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
