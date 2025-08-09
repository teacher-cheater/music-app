import {
  setAccessToken,
  setRefreshToken,
  setUsername,
} from "@/store/features/authSlice";
import { useAppDispatch } from "@/store/store";
import { useEffect } from "react";

export const useInitAuth = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const access = localStorage.getItem("access") || "";
    const refresh = localStorage.getItem("access") || "";
    const username = localStorage.getItem("access") || "";

    dispatch(setAccessToken(access));
    dispatch(setRefreshToken(refresh));
    dispatch(setUsername(username));
  }, [dispatch]);
};
