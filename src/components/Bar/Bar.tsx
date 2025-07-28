import cls from "./bar.module.css";
import Link from "next/link";

const Bar = () => {
  return (
    <div className={cls.bar}>
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
              <div className={`${cls.player__btnPlay} ${cls.btn}`}>
                <svg className={cls.player__btnPlaySvg}>
                  <use xlinkHref="/img/icon/sprite.svg#icon-play"></use>
                </svg>
              </div>
              <div className={cls.player__btnNext}>
                <svg className={cls.player__btnNextSvg}>
                  <use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
                </svg>
              </div>
              <div className={`${cls.player__btnRepeat} ${cls.btnIcon}`}>
                <svg className={cls.player__btnRepeatSvg}>
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
              <div className={cls.trackPlay__contain}>
                <div className={cls.trackPlay__image}>
                  <svg className={cls.trackPlay__svg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className={cls.trackPlay__author}>
                  <Link className={cls.trackPlay__authorLink} href="">
                    Ты та...
                  </Link>
                </div>
                <div className={cls.trackPlay__album}>
                  <Link className={cls.trackPlay__albumLink} href="">
                    Баста
                  </Link>
                </div>
              </div>

              <div className={cls.trackPlay__dislike}>
                <div className={`${cls.player__btnShuffle} ${cls.btnIcon}`}>
                  <svg className={cls.trackPlay__likeSvg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                  </svg>
                </div>
                <div className={`${cls.trackPlay__dislike} ${cls.btnIcon}`}>
                  <svg className={cls.trackPlay__dislikeSvg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-dislike"></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className={cls.bar__volumeBlock}>
            <div className={cls.volume__content}>
              <div className={cls.volume__image}>
                <svg className={cls.volume__svg}>
                  <use xlinkHref="/img/icon/sprite.svg#icon-volume"></use>
                </svg>
              </div>
              <div className={`${cls.volume__progress} ${cls.btn}`}>
                <input
                  className={`${cls.volume__progressLine} ${cls.btn}`}
                  type="range"
                  name="range"
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
