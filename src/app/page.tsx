import Bar from "./components/Bar/Bar";
import cls from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={cls.wrapper}>
      <div className={cls.container}>
        <main className={cls.main}>
          <nav className={cls.main__nav}>
            <div className={cls.nav__logo}>
              {/* <Image
                width={250}
                height={170}
                className={"logo__image"}
                src="/img/logo.png"
                alt={"logo"}
              /> */}
            </div>
            <div className={cls.nav__burger}>
              <span className={cls.burger__line}></span>
              <span className={cls.burger__line}></span>
              <span className={cls.burger__line}></span>
            </div>
            <div className={cls.nav__menu}>
              <ul className={cls.menu__list}>
                <li className={cls.menu__item}>
                  {/*TODO: a -> Link*/}
                  <a href="#" className={cls.menu__link}>
                    Главное
                  </a>
                </li>
                <li className={cls.menu__item}>
                  <a href="#" className={cls.menu__link}>
                    Мой плейлист
                  </a>
                </li>
                <li className={cls.menu__item}>
                  <a href="../signin.html" className={cls.menu__link}>
                    Войти
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className={cls.centerblock}>
            <div className={cls.centerblock__search}>
              <svg className={cls.search__svg}>
                <use xlinkHref="/img/icon/sprite.svg#icon-search"></use>
              </svg>
              <input
                className={cls.search__text}
                type="search"
                placeholder="Поиск"
                name="search"
              />
            </div>
            <h2 className={cls.centerblock__h2}>Треки</h2>
            <div className={cls.centerblock__filter}>
              <div className={cls.filter__title}>Искать по:</div>
              <div className={cls.filter__button}>исполнителю</div>
              <div className={cls.filter__button}>году выпуска</div>
              <div className={cls.filter__button}>жанру</div>
            </div>
            <div className={cls.centerblock__content}>
              <div className={cls.content__title}>
                <div className={cls.playlistTitle__col + " " + cls.col01}>
                  Трек
                </div>
                <div className={cls.playlistTitle__col + " " + cls.col02}>
                  Исполнитель
                </div>
                <div className={cls.playlistTitle__col + " " + cls.col03}>
                  Альбом
                </div>
                <div className={cls.playlistTitle__col + " " + cls.col04}>
                  <svg className={cls.playlistTitle__svg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
                  </svg>
                </div>
              </div>
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
                        <a className={cls.track__titleLink} href="">
                          Guilt <span className={cls.track__titleSpan}></span>
                        </a>
                      </div>
                    </div>
                    <div className={cls.track__author}>
                      <a className={cls.track__authorLink} href="">
                        Nero
                      </a>
                    </div>
                    <div className={cls.track__album}>
                      <a className={cls.track__albumLink} href="">
                        Welcome Reality
                      </a>
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
                        <a className={cls.track__titleLink} href="">
                          Elektro <span className={cls.track__titleSpan}></span>
                        </a>
                      </div>
                    </div>
                    <div className={cls.track__author}>
                      <a className={cls.track__authorLink} href="">
                        Dynoro, Outwork, Mr. Gee
                      </a>
                    </div>
                    <div className={cls.track__album}>
                      <a className={cls.track__albumLink} href="">
                        Elektro
                      </a>
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
                        <a className={cls.track__titleLink} href="">
                          I’m Fire{" "}
                          <span className={cls.track__titleSpan}></span>
                        </a>
                      </div>
                    </div>
                    <div className={cls.track__author}>
                      <a className={cls.track__authorLink} href="">
                        Ali Bakgor
                      </a>
                    </div>
                    <div className={cls.track__album}>
                      <a className={cls.track__albumLink} href="">
                        I’m Fire
                      </a>
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
                        <a className={cls.track__titleLink} href="">
                          Non Stop
                          <span className={cls.track__titleSpan}>(Remix)</span>
                        </a>
                      </div>
                    </div>
                    <div className={cls.track__author}>
                      <a className={cls.track__authorLink} href="">
                        Стоункат, Psychopath
                      </a>
                    </div>
                    <div className={cls.track__album}>
                      <a className={cls.track__albumLink} href="">
                        Non Stop
                      </a>
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
                        <a className={cls.track__titleLink} href="">
                          Run Run
                          <span className={cls.track__titleSpan}>
                            (feat. AR/CO)
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className={cls.track__author}>
                      <a className={cls.track__authorLink} href="">
                        Jaded, Will Clarke, AR/CO
                      </a>
                    </div>
                    <div className={cls.track__album}>
                      <a className={cls.track__albumLink} href="">
                        Run Run
                      </a>
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
            </div>
          </div>
          <div className={cls.main__sidebar}>
            <div className={cls.sidebar__personal}>
              <p className={cls.sidebar__personalName}>Sergey.Ivanov</p>
              <div className={cls.sidebar__icon}>
                <svg>
                  <use xlinkHref="/img/icon/sprite.svg#logout"></use>
                </svg>
              </div>
            </div>
            <div className={cls.sidebar__block}>
              <div className={cls.sidebar__list}>
                <div className={cls.sidebar__item}>
                  <a className={cls.sidebar__link} href="#">
                    <Image
                      className={cls.sidebar__img}
                      src="/img/playlist01.png"
                      alt="day's playlist"
                      width={250}
                      height={170}
                    />
                  </a>
                </div>
                <div className={cls.sidebar__item}>
                  <a className={cls.sidebar__link} href="#">
                    <Image
                      className={cls.sidebar__img}
                      src="/img/playlist02.png"
                      alt="day's playlist"
                      width={250}
                      height={170}
                    />
                  </a>
                </div>
                <div className={cls.sidebar__item}>
                  <a className={cls.sidebar__link} href="#">
                    <Image
                      className={cls.sidebar__img}
                      src="/img/playlist03.png"
                      alt="day's playlist"
                      width={250}
                      height={170}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Bar />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}
