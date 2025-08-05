import cls from "./playlist.module.css";
import Track from "../Track/Track";
import { TrackType } from "@/sharedtypes/sharedTypes";

interface PlaylistProps {
  allTracks: TrackType[];
  isLoading: boolean;
}

const Playlist = ({ allTracks, isLoading }: PlaylistProps) => {
  return (
    <div className={cls.content__playlist}>
      {isLoading ? (
        <h3 style={{ color: "white" }}>Loading...</h3>
      ) : (
        <>
          {allTracks.map(track => (
            <Track track={track} key={track._id} playlist={allTracks} />
          ))}
        </>
      )}
    </div>
  );
};

export default Playlist;
