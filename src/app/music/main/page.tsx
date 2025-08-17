"use client";
import { useAppSelector } from "@/store/store";
import Centerblock from "@/components/Centerblock/Centerblock";
import { useCurrentPlaylist } from "@/hooks/useCurrentPlaylist";

export default function Home() {
  const { fetchError, fetchIsLoading, allTracks, filters, filteredTracks } =
    useAppSelector(state => state.tracks);

  const playlist = useCurrentPlaylist(allTracks, filteredTracks);

  return (
    <Centerblock
      pagePlaylist={playlist}
      allTracks={allTracks}
      isLoading={fetchIsLoading}
      errorRes={fetchError}
      title={"Треки"}
    />
  );
}
