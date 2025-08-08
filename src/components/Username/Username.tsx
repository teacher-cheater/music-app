"use client";
import { useAppSelector } from "@/store/store";
import cls from "./username.module.css";

const Username = () => {
  const username = useAppSelector(state => state.auth.username);
  return <p className={cls.sidebar__personalName}>{username || "Админ"}</p>;
};

export default Username;
