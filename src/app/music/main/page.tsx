"use client";
import { useAppSelector } from "@/store/store";
import Centerblock from "@/components/Centerblock/Centerblock";
import { useEffect, useState } from "react";
import { TrackType } from "@/sharedtypes/sharedTypes";

export default function Home() {
  const { fetchError, fetchIsLoading, allTracks, filters, filtredTracks } =
    useAppSelector(state => state.tracks);
  const [playlist, setPlaylist] = useState<TrackType[]>([]);

  useEffect(() => {
    const currentPlaylist = filters.author.length ? filtredTracks : allTracks;
    setPlaylist(currentPlaylist);
  }, [filters, filtredTracks]);

  return (
    <Centerblock
      allTracks={playlist}
      isLoading={fetchIsLoading}
      errorRes={fetchError}
      title={"Треки"}
    />
  );
}
