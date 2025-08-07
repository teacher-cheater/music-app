"use client";
import { useAppSelector } from "@/store/store";
import Centerblock from "@/components/Centerblock/Centerblock";

export default function Home() {
  const { fetchError, fetchIsLoading, allTracks } = useAppSelector(
    state => state.tracks
  );
  return (
    <Centerblock
      allTracks={allTracks}
      isLoading={fetchIsLoading}
      errorRes={fetchError}
    />
  );
}
