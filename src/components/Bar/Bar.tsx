"use client";

import cls from "./bar.module.css";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { ChangeEvent, useRef, useState } from "react";
import { setIsPlay } from "@/store/features/trackSlice";
import { getTimepanel } from "@/utils/helpers";
import TrackInfo from "../TrackInfo/TrackInfo";

const Bar = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentTrack = useAppSelector(state => state.tracks.currentTrack);
  const isPlay = useAppSelector(state => state.tracks.isPlay);

  const dispatch = useAppDispatch();

  const [isLoop, setIsLoop] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [isLoadedTtrack, setIsLoadedTtrack] = useState(false);

  if (!currentTrack) return;

  const onTogglePlayTrack = () => {
    if (isPlay) {
      audioRef.current?.pause();
      dispatch(setIsPlay(false));
    } else {
      audioRef.current?.play();
      dispatch(setIsPlay(true));
    }
  };

  const onToggleLoop = () => {
    setIsLoop(prev => !prev);
  };

  const onTimeUpdate = () => {
    if (audioRef.current)
      console.log(audioRef.current.currentTime, audioRef.current.duration);
  };

  const onLoadedMetadata = () => {
    console.log("start");
    if (audioRef.current) {
      audioRef.current.play();
      dispatch(setIsPlay(true));
    }
  };

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);

    if (audioRef.current) {
      setVolume(newVolume);
      audioRef.current.volume = newVolume / 100;
    }
  };

  return (
    <div className={cls.bar}>
      <audio
        className={cls.bar__audio}
        ref={audioRef}
        src={currentTrack?.track_file}
        controls
        loop={isLoop}
        onTimeUpdate={() => onTimeUpdate()}
        onLoadedMetadata={() => onLoadedMetadata()}
        onEnded={() => console.log("onEnded")}
      />
      <div className={cls.bar__content}>
        <div className={cls.bar__playerProgress}></div>
        <div className={cls.bar__playerBlock}>
          <div className={cls.bar__player}>
            <div className={cls.player__controls}>
              <div className={cls.player__btnPrev}>
                <svg className={cls.player__btnPrevSvg}>
                  <use xlinkHref="/img/icon/sprite.svg#icon-prev"></use>
                </svg>
              </div>
              <div
                onClick={() => onTogglePlayTrack()}
                className={`${cls.player__btnPlay} ${cls.btn}`}
              >
                {isPlay ? (
                  <svg className={cls.player__btnPlaySvg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-pause" />
                  </svg>
                ) : (
                  <svg className={cls.player__btnPlaySvg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-play" />
                  </svg>
                )}
              </div>
              <div className={cls.player__btnNext}>
                <svg className={cls.player__btnNextSvg}>
                  <use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
                </svg>
              </div>
              <div
                onClick={() => onToggleLoop()}
                className={`${cls.player__btnRepeat} ${cls.btnIcon}`}
              >
                <svg
                  className={`${cls.player__btnRepeatSvg} ${
                    isLoop ? cls._active : ""
                  }`}
                >
                  <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
                </svg>
              </div>
              <div className={`${cls.player__btnShuffle} ${cls.btnIcon}`}>
                <svg className={cls.player__btnShuffleSvg}>
                  <use xlinkHref="/img/icon/sprite.svg#icon-shuffle"></use>
                </svg>
              </div>
            </div>

            <div className={cls.player__trackPlay}>
              <TrackInfo track={currentTrack} />
              <div className={cls.trackPlay__dislike}>
                <div className={`${cls.player__btnShuffle} ${cls.btnIcon}`}>
                  <svg className={cls.trackPlay__likeSvg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-like" />
                  </svg>
                </div>
                <div className={`${cls.trackPlay__dislike} ${cls.btnIcon}`}>
                  <svg className={cls.trackPlay__dislikeSvg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-dislike" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className={cls.bar__volumeBlock}>
            <div className={cls.volume__content}>
              <div className={cls.volume__image}>
                <svg className={cls.volume__svg}>
                  <use xlinkHref="/img/icon/sprite.svg#icon-volume" />
                </svg>
              </div>
              <div className={`${cls.volume__progress} ${cls.btn}`}>
                <input
                  className={`${cls.volume__progressLine} ${cls.btn}`}
                  type="range"
                  name="range"
                  onChange={e => handleVolumeChange(e)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bar;
