import { ReactNode } from "react";
import cls from "./layout.module.css";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className={cls.wrapper}>
      <div className={cls.containerEnter}>
        <div className={cls.modal__block}>
          <form className={cls.modal__form}>{children}</form>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
