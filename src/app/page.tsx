import Bar from "@/components/Bar/Bar";
import Main from "@/components/Main/Main";
import cls from "./page.module.css";

export default function Home() {
  return (
    <div className={cls.wrapper}>
      <div className={cls.container}>
        <Main />
        <Bar />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}
