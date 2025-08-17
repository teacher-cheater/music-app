"use client";

import Centerblock from "@/components/Centerblock/Centerblock";
import { useAppSelector } from "@/store/store";

const FavoriteList = () => {
  const { favoriteTracks, fetchIsLoading, fetchError, pagePlaylist } =
    useAppSelector(state => state.tracks);

  return (
    <Centerblock
      pagePlaylist={pagePlaylist}
      allTracks={favoriteTracks}
      isLoading={fetchIsLoading}
      errorRes={fetchError}
      title={"Треки"}
    />
  );
};

export default FavoriteList;
