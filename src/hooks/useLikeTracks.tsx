import { addLike } from "@/services/tracks/tracksApi";
import { TrackType } from "@/sharedtypes/sharedTypes";
import { addLikedTracks } from "@/store/features/trackSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { withReAuth } from "@/utils/withReAuth";
import { AxiosError } from "axios";
import { useState } from "react";

type returnTypeHook = {
  isLoading: boolean;
  errorMsg: string | null;
  toggleLike: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  isLike: boolean;
};

export const useLikeTrack = (track: TrackType | null): returnTypeHook => {
  const { favoriteTracks } = useAppSelector(state => state.tracks);
  const { access, refresh } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  const isLike = favoriteTracks.some(t => t._id === track?._id);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const toggleLike = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
    if (!access) {
      return setErrorMsg("Нет авторизации");
    }

    // removeLike для дизлайка
    const actionApi = isLike ? addLike : addLike;
    // removeLikedTracks
    const actionSlice = isLike ? addLikedTracks : addLikedTracks;

    setIsLoading(true);
    setErrorMsg(null);
    if (track) {
      withReAuth(
        newToken => actionApi(newToken || access, track._id),
        refresh,
        dispatch
      )
        .then(() => {
          dispatch(actionSlice(track));
        })
        .catch(error => {
          if (error instanceof AxiosError) {
            if (error.response) {
              setErrorMsg(error.response.data.message);
            } else if (error.request) {
              setErrorMsg("Произошла ошибка. Попробуйте позже");
            } else {
              setErrorMsg("Неизвестная ошибка");
            }
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return {
    isLoading,
    errorMsg,
    toggleLike,
    isLike,
  };
};
