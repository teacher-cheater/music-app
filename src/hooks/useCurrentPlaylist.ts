import { TrackType } from "@/sharedtypes/sharedTypes";
import { useAppSelector } from "@/store/store";
import { useEffect, useState } from "react";

export const useCurrentPlaylist = (
  allTracks: TrackType[],
  filteredItems: TrackType[]
) => {
  const { filters } = useAppSelector(state => state.tracks);
  const [playlist, setPlaylist] = useState<TrackType[]>([]);

  useEffect(() => {
    const hasFilters =
      filters.author.length || filters.genre.length || filters.year;
    setPlaylist(hasFilters ? filteredItems : allTracks);
  }, [filters, filteredItems, allTracks]);

  return playlist;
};
