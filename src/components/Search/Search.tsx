"use client";
import { ChangeEvent, useState } from "react";
import cls from "./search.module.css";

const Search = () => {
  const [serachInput, setSerachInput] = useState("");

  const onSerachInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSerachInput(e.target.value);
  };

  return (
    <div className={cls.centerblock__search}>
      <svg className={cls.search__svg}>
        <use xlinkHref="/img/icon/sprite.svg#icon-search"></use>
      </svg>
      <input
        className={cls.search__text}
        type="search"
        placeholder="Поиск"
        name="search"
        value={serachInput}
        onChange={e => onSerachInput(e)}
      />
    </div>
  );
};

export default Search;
