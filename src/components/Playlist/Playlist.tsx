import { data } from "@/data";
import cls from "./playlist.module.css";
import Track from "../Track/Track";

const Playlist = () => {
  return (
    <div className={cls.content__playlist}>
      {data.map(track => (
        <Track track={track} key={track._id} playlist={data} />
      ))}
    </div>
  );
};

export default Playlist;
