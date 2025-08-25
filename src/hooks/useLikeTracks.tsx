import { addLike, removeLike } from "@/services/tracks/tracksApi";
import { TrackType } from "@/sharedtypes/sharedTypes";
import { addLikedTracks, removeLikedTracks } from "@/store/features/trackSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { withReAuth } from "@/utils/withReAuth";
import { AxiosError } from "axios";
import { useCallback, useState } from "react";

interface UseLikeTrackReturn {
  isLoading: boolean;
  errorMsg: string | null;
  toggleLike: (e: React.MouseEvent<HTMLElement>) => void;
  isLike: boolean;
}

export const useLikeTrack = (track: TrackType | null): UseLikeTrackReturn => {
  const { favoriteTracks } = useAppSelector(state => state.tracks);
  const { access, refresh } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  const isLike = favoriteTracks.some(t => t._id === track?._id);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const toggleLike = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();

      if (!access) {
        setErrorMsg("Нет авторизации");
        return;
      }

      if (!track) {
        setErrorMsg("Трек не выбран");
        return;
      }

      const actionApi = isLike ? removeLike : addLike;
      const actionSlice = isLike ? removeLikedTracks : addLikedTracks;

      setIsLoading(true);
      setErrorMsg(null);

      withReAuth(
        newToken => actionApi(newToken || access, track._id),
        refresh,
        dispatch
      )
        .then(() => {
          dispatch(actionSlice(track));
        })
        .catch((error: unknown) => {
          if (error instanceof AxiosError) {
            if (error.response) {
              setErrorMsg(error.response.data.message || "Ошибка сервера");
            } else if (error.request) {
              setErrorMsg("Нет ответа от сервера. Попробуйте позже");
            } else {
              setErrorMsg("Неизвестная ошибка");
            }
          } else if (error instanceof Error) {
            setErrorMsg(error.message);
          } else {
            setErrorMsg("Произошла непредвиденная ошибка");
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [access, track, isLike, refresh, dispatch]
  );

  return {
    isLoading,
    errorMsg,
    toggleLike,
    isLike,
  };
};
