import Search from "../Search/Search";
import FilterButtons from "../Filter/FilterButtons";
import Playlist from "../Playlist/Playlist";
import cls from "./centerblock.module.css";
import { TrackType } from "@/sharedtypes/sharedTypes";

interface CenterblockProps {
  allTracks: TrackType[];
  isLoading: boolean;
}

const Centerblock = ({ allTracks, isLoading }: CenterblockProps) => {
  return (
    <div className={cls.centerblock}>
      <Search />
      <h2 className={cls.centerblock__h2}>Треки</h2>
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
        <Playlist allTracks={allTracks} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Centerblock;
