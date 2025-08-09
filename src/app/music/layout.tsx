"use client";
import { ReactNode } from "react";
import cls from "./layout.module.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import Bar from "@/components/Bar/Bar";
import Navigation from "@/components/Navigation/Navigation";
import FetchchingTracks from "@/components/FetchchingTracks/FetchchingTracks";
import { useInitAuth } from "@/hooks/useInitAuth";

const MusicLayout = ({ children }: { children: ReactNode }) => {
  useInitAuth();
  return (
    <div className={cls.wrapper}>
      <div className={cls.container}>
        <main className={cls.main}>
          <FetchchingTracks />
          <Navigation />
          {children}
          <Sidebar />
        </main>
        <Bar />
        <footer className="footer"></footer>
      </div>
    </div>
  );
};

export default MusicLayout;
