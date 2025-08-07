"use client";
import { getTracks } from "@/services/tracks/tracksApi";
import {
  setAllTracks,
  setFetchError,
  setFetchIsLoading,
} from "@/store/features/trackSlice";
import { useAppSelector } from "@/store/store";
import { AxiosError } from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function FetchchingTracks() {
  const dispatch = useDispatch();
  const { allTracks } = useAppSelector(state => state.tracks);

  useEffect(() => {
    if (allTracks.length) {
      dispatch(setAllTracks(allTracks));
    } else {
      dispatch(setFetchIsLoading(true));
      getTracks()
        .then(res => dispatch(setAllTracks(res)))
        .catch(error => {
          if (error instanceof AxiosError) {
            if (error.response) {
              dispatch(setFetchError(error.response.data));
            } else if (error.request) {
              dispatch(setFetchError("Что-то с интернетом"));
            } else {
              dispatch(setFetchError("Неизвестная ошибка"));
            }
          }
        })
        .finally(() => {
          dispatch(setFetchIsLoading(false));
        });
    }
  }, []);

  return <></>;
}
