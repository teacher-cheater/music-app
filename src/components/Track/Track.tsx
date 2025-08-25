"use client";

import Link from "next/link";
import cls from "./track.module.css";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { TrackType } from "@/sharedtypes/sharedTypes";
import {
  setCurrentPlayList,
  setCurrentTrack,
  setIsPlay,
} from "@/store/features/trackSlice";
import { formatDuration } from "@/utils/helpers";
import { useLikeTrack } from "@/hooks/useLikeTracks";
import { memo } from "react";

interface TrackProps {
  track: TrackType;
  playlist: TrackType[];
}

const Track = memo(({ track, playlist }: TrackProps) => {
  const { name, author, album, duration_in_seconds } = track;
  const currentTrack = useAppSelector(state => state.tracks.currentTrack);
  const isPlay = useAppSelector(state => state.tracks.isPlay);
  const user = useAppSelector(state => state.auth.username);

  const dispatch = useAppDispatch();
  const { toggleLike, isLike } = useLikeTrack(track);

  const isCurrentTrackPlaying = currentTrack?._id === track._id && isPlay;

  const onClickTrack = () => {
    if (currentTrack?._id === track._id) {
      dispatch(setIsPlay(!isPlay));
      return;
    }
    dispatch(setCurrentTrack(track));
    dispatch(setIsPlay(true));
    dispatch(setCurrentPlayList(playlist));
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
        <div onClick={e => toggleLike(e)} className={cls.track__time}>
          {user ? (
            <svg
              className={`${cls.track__timeSvg}
              ${isLike ? cls._active : ""}
            `}
            >
              <use xlinkHref="/img/icon/sprite.svg#icon-like" />
            </svg>
          ) : (
            <svg className={cls.track__timeSvg}>
              <use xlinkHref="/img/icon/sprite.svg#icon-dislike" />
            </svg>
          )}
          <span className={cls.track__timeText}>
            {formatDuration(duration_in_seconds)}
          </span>
        </div>
      </div>
    </div>
  );
});

export default Track;
