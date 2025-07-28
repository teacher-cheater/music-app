import cls from "./playlist.module.css";
import Link from "next/link";

const Playlist = () => {
  return (
    <div className={cls.content__playlist}>
      <div className={cls.playlist__item}>
        <div className={cls.playlist__track}>
          <div className={cls.track__title}>
            <div className={cls.track__titleImage}>
              <svg className={cls.track__titleSvg}>
                <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div className={cls.track__titleText}>
              <Link className={cls.track__titleLink} href="">
                Guilt <span className={cls.track__titleSpan}></span>
              </Link>
            </div>
          </div>
          <div className={cls.track__author}>
            <Link className={cls.track__authorLink} href="">
              Nero
            </Link>
          </div>
          <div className={cls.track__album}>
            <Link className={cls.track__albumLink} href="">
              Welcome Reality
            </Link>
          </div>
          <div className={cls.track__time}>
            <svg className={cls.track__timeSvg}>
              <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className={cls.track__timeText}>4:44</span>
          </div>
        </div>
      </div>

      <div className={cls.playlist__item}>
        <div className={cls.playlist__track}>
          <div className={cls.track__title}>
            <div className={cls.track__titleImage}>
              <svg className={cls.track__titleSvg}>
                <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div className={cls.track__titleText}>
              <Link className={cls.track__titleLink} href="">
                Elektro <span className={cls.track__titleSpan}></span>
              </Link>
            </div>
          </div>
          <div className={cls.track__author}>
            <Link className={cls.track__authorLink} href="">
              Dynoro, Outwork, Mr. Gee
            </Link>
          </div>
          <div className={cls.track__album}>
            <Link className={cls.track__albumLink} href="">
              Elektro
            </Link>
          </div>
          <div className={cls.track__time}>
            <svg className={cls.track__timeSvg}>
              <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className={cls.track__timeText}>2:22</span>
          </div>
        </div>
      </div>

      <div className={cls.playlist__item}>
        <div className={cls.playlist__track}>
          <div className={cls.track__title}>
            <div className={cls.track__titleImage}>
              <svg className={cls.track__titleSvg}>
                <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div className={cls.track__titleText}>
              <Link className={cls.track__titleLink} href="">
                I’m Fire <span className={cls.track__titleSpan}></span>
              </Link>
            </div>
          </div>
          <div className={cls.track__author}>
            <Link className={cls.track__authorLink} href="">
              Ali Bakgor
            </Link>
          </div>
          <div className={cls.track__album}>
            <Link className={cls.track__albumLink} href="">
              I’m Fire
            </Link>
          </div>
          <div className={cls.track__time}>
            <svg className={cls.track__timeSvg}>
              <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className={cls.track__timeText}>2:22</span>
          </div>
        </div>
      </div>

      <div className={cls.playlist__item}>
        <div className={cls.playlist__track}>
          <div className={cls.track__title}>
            <div className={cls.track__titleImage}>
              <svg className={cls.track__titleSvg}>
                <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div className={cls.track__titleText}>
              <Link className={cls.track__titleLink} href="">
                Non Stop
                <span className={cls.track__titleSpan}>(Remix)</span>
              </Link>
            </div>
          </div>
          <div className={cls.track__author}>
            <Link className={cls.track__authorLink} href="">
              Стоункат, Psychopath
            </Link>
          </div>
          <div className={cls.track__album}>
            <Link className={cls.track__albumLink} href="">
              Non Stop
            </Link>
          </div>
          <div className={cls.track__time}>
            <svg className={cls.track__timeSvg}>
              <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className={cls.track__timeText}>4:12</span>
          </div>
        </div>
      </div>

      <div className={cls.playlist__item}>
        <div className={cls.playlist__track}>
          <div className={cls.track__title}>
            <div className={cls.track__titleImage}>
              <svg className={cls.track__titleSvg}>
                <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div>
              <Link className={cls.track__titleLink} href="">
                Run Run
                <span className={cls.track__titleSpan}>(feat. AR/CO)</span>
              </Link>
            </div>
          </div>
          <div className={cls.track__author}>
            <Link className={cls.track__authorLink} href="">
              Jaded, Will Clarke, AR/CO
            </Link>
          </div>
          <div className={cls.track__album}>
            <Link className={cls.track__albumLink} href="">
              Run Run
            </Link>
          </div>
          <div className={cls.track__time}>
            <svg className={cls.track__timeSvg}>
              <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className={cls.track__timeText}>2:54</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
