"use client";
import { useAppSelector } from "@/store/store";
import Centerblock from "@/components/Centerblock/Centerblock";
import { useCurrentPlaylist } from "@/hooks/useCurrentPlaylist";

export default function Home() {
  const { fetchError, fetchIsLoading, allTracks, filters, filteredTracks } =
    useAppSelector(state => state.tracks);

  const hasActiveFilters =
    filters.author.length > 0 ||
    filters.genre.length > 0 ||
    filters.year !== null;

  const playlist = useCurrentPlaylist(allTracks, filteredTracks);
  const displayTracks = hasActiveFilters ? filteredTracks : allTracks;

  return (
    <Centerblock
      pagePlaylist={playlist || displayTracks}
      allTracks={allTracks}
      isLoading={fetchIsLoading}
      errorRes={fetchError}
      title={"Треки"}
    />
  );
}
