import { ChangeEvent, RefObject, useEffect } from "react";
import cls from "./audioPlayer.module.css";

interface AudioPlayerProp {
  audioRef: RefObject<HTMLAudioElement | null>;
  volume: number;
  handleVolumeChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AudioPlayer = ({
  audioRef,
  volume,
  handleVolumeChange,
}: AudioPlayerProp) => {
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <div className={cls.volume__content}>
      <div className={cls.volume__image}>
        {volume ? "" : <div className={cls._off} />}
        <svg
          className={`${cls.volume__svg} 
                ${volume ? "" : cls.volume__svg_off}`}
        >
          <use xlinkHref="/img/icon/sprite.svg#icon-volume" />
        </svg>
      </div>
      <div className={`${cls.volume__progress} ${cls.btn}`}>
        <input
          className={`${cls.volume__progressLine} ${cls.btn}`}
          type="range"
          name="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={e => handleVolumeChange(e)}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
