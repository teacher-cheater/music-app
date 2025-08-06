"use client";

import cls from "./main.module.css";
import Centerblock from "../Centerblock/Centerblock";
import { getTracks } from "@/services/tracks/tracksApi";
import { useEffect, useState } from "react";
import { TrackType } from "@/sharedtypes/sharedTypes";
import { AxiosError } from "axios";

const Main = () => {
  const [allTracks, setAllTracks] = useState<TrackType[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTracks()
      .then(res => {
        setAllTracks(res);
      })
      .catch(error => {
        if (error instanceof AxiosError) {
          if (error.response) {
            setError(error.response.data);
          } else if (error.request) {
            setError("Что-то с интернетом");
          } else {
            setError("Неизвестная ошибка");
          }
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <main className={cls.main}>
      <Centerblock allTracks={allTracks} isLoading={isLoading} />
    </main>
  );
};

export default Main;
