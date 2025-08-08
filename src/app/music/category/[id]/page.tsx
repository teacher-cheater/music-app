"use client";

import Centerblock from "@/components/Centerblock/Centerblock";
import { getCategories } from "@/services/tracks/tracksApi";
import { TrackType } from "@/sharedtypes/sharedTypes";
import { useAppSelector } from "@/store/store";
import { AxiosError } from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CategoryPage = () => {
  const params = useParams<{ id: string }>();
  const { allTracks, fetchIsLoading } = useAppSelector(state => state.tracks);
  const [isLoading, setIsLoading] = useState(true);
  const [errorRes, setErrorRes] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("");
  const [tracks, setTracks] = useState<TrackType[]>([]);
  const id = params.id;

  useEffect(() => {
    setIsLoading(true);
    if (!fetchIsLoading && allTracks.length) {
      getCategories(id)
        .then(res => {
          setTitle(res.name);
          const tracksIds = res.items;
          const resultTracks = allTracks.filter(el =>
            tracksIds.includes(el._id)
          );
          setTracks(resultTracks);
        })
        .catch(error => {
          if (error instanceof AxiosError) {
            if (error.response) {
              setErrorRes(error.response.data);
            } else if (error.request) {
              setErrorRes("Упс, ошибка");
            }
          }
        })
        .finally(() => setIsLoading(false));
    }
  }, [fetchIsLoading]);

  return (
    <Centerblock
      allTracks={tracks}
      isLoading={isLoading}
      errorRes={errorRes}
      title={title}
    />
  );
};

export default CategoryPage;
