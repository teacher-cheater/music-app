"use client";

import Centerblock from "@/components/Centerblock/Centerblock";
import { getCategories } from "@/services/tracks/tracksApi";
import { TrackType } from "@/sharedtypes/sharedTypes";
import { useAppSelector } from "@/store/store";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CategoryPage = () => {
  const params = useParams<{ id: string }>();
  const { allTracks, fetchIsLoading, fetchError } = useAppSelector(
    state => state.tracks
  );
  const [isLoading, setIsLoading] = useState(true);
  const [errorRes, setErrorRes] = useState<string | null>(null);
  const [title, setTitle] = useState(true);
  const [tracks, setTracks] = useState<TrackType[]>([]);
  const id = params.id;
  
  console.log("id", params);

  useEffect(() => {
    setIsLoading(true);
    if (!fetchIsLoading) {
      getCategories(id);
    }
  }, []);

  return (
    <Centerblock
      allTracks={allTracks}
      isLoading={fetchIsLoading}
      errorRes={fetchError}
    />
  );
};

export default CategoryPage;
