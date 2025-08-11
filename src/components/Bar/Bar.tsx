"use client";

import cls from "./bar.module.css";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import {
  setIsPlay,
  setIsShuffled,
  setNextTrack,
  setPrevTrack,
} from "@/store/features/trackSlice";
import TrackInfo from "../TrackInfo/TrackInfo";
import ProgressBar from "../ProgressBar/ProgressBar";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import { getTimepanel } from "@/utils/helpers";

const Bar = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentTrack = useAppSelector(state => state.tracks.currentTrack);
  const isPlay = useAppSelector(state => state.tracks.isPlay);
  const isShuffle = useAppSelector(state => state.tracks.isShuffled);
  const currentPlaylist = useAppSelector(state => state.tracks.currentPlayList);
  const curIndex = useAppSelector(state => state.tracks.curIndex);

  const dispatch = useAppDispatch();

  const [isLoop, setIsLoop] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [isLoadedTrack, setisLoadedTrack] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    setisLoadedTrack(false);
    setCurrentTime(0);
    if (!audioRef.current) return;

    if (isPlay) {
      audioRef.current.play().catch(e => console.error("Play error:", e));
    } else {
      audioRef.current.pause();
    }
  }, [currentTrack, isLoop, isShuffle, isPlay, currentTrack?._id]);

  if (!currentTrack) return null;

  const onTogglePlayTrack = () => {
    if (isPlay) {
      audioRef.current?.pause();
      dispatch(setIsPlay(false));
    } else {
      audioRef.current?.play();
      dispatch(setIsPlay(true));
    }
  };

  const onToggleShuffled = () => {
    dispatch(setIsShuffled(!isShuffle));
  };

  const onToggleLoop = () => {
    setIsLoop(prev => !prev);
  };

  const onTimeUpdate = () => {
    if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
  };

  const onLoadedMetadata = () => {
    if (audioRef.current) {
      audioRef.current.play();
      dispatch(setIsPlay(true));
      setisLoadedTrack(true);
    }
  };

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);

    if (audioRef.current) {
      setVolume(newVolume);
      audioRef.current.volume = newVolume / 100;
    }
  };

  const onChangeProgress = (e: ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const inputTime = Number(e.target.value);
      audioRef.current.currentTime = inputTime;
    }
  };

  const onNextTrack = () => {
    dispatch(setNextTrack());
  };

  const onPrevtTrack = () => {
    dispatch(setPrevTrack());
  };

  const onEnded = () => {
    if (isLoop) {
      audioRef.current?.play();
      return;
    }

    if (isShuffle) {
      dispatch(setNextTrack());
    } else {
      if (curIndex === -1 || curIndex === currentPlaylist.length - 1) {
        onNextTrack();
      } else {
        dispatch(setIsPlay(false));
      }
    }
  };

  const showTrackTime = () => {
    return getTimepanel(currentTime, currentTrack?.duration_in_seconds);
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
        onEnded={() => onEnded()}
      />
      <div className={cls.bar__content}>
        {isLoadedTrack ? (
          ""
        ) : (
          <div className={cls.bar__loadingTrack}>Загрузка трека...</div>
        )}
        <div className={cls.bar__currentTrackTime}>{showTrackTime()}</div>
        <ProgressBar
          max={Number(audioRef.current?.duration) || 0}
          step={0.1}
          readOnly={!isLoadedTrack}
          value={currentTime}
          onChange={onChangeProgress}
        />
        <div className={cls.bar__playerBlock}>
          <div className={cls.bar__player}>
            <div className={cls.player__controls}>
              <div
                onClick={() => onPrevtTrack()}
                className={cls.player__btnPrev}
              >
                <svg className={cls.player__btnPrevSvg}>
                  <use xlinkHref="/img/icon/sprite.svg#icon-prev" />
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
              <div
                onClick={() => onNextTrack()}
                className={cls.player__btnNext}
              >
                <svg className={cls.player__btnNextSvg}>
                  <use xlinkHref="/img/icon/sprite.svg#icon-next" />
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
                  <use xlinkHref="/img/icon/sprite.svg#icon-repeat" />
                </svg>
              </div>
              <div
                onClick={() => onToggleShuffled()}
                className={`${cls.player__btnShuffle} ${cls.btnIcon}`}
              >
                <svg
                  className={`${cls.player__btnRepeatSvg} ${
                    isShuffle ? cls._active : ""
                  }`}
                >
                  <use xlinkHref="/img/icon/sprite.svg#icon-shuffle" />
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
            <AudioPlayer
              audioRef={audioRef}
              volume={volume}
              handleVolumeChange={handleVolumeChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bar;
