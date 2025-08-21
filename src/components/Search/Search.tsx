"use client";
import cls from "./search.module.css";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setSearchQuery } from "@/store/features/trackSlice";

const Search = () => {
  const { searchQuery } = useAppSelector(state => state.tracks);
  const dispatch = useAppDispatch();

  const onSearchInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className={cls.centerblock__search}>
      <svg className={cls.search__svg}>
        <use xlinkHref="/img/icon/sprite.svg#icon-search" />
      </svg>
      <input
        className={cls.search__text}
        type="search"
        placeholder="Поиск"
        name="search"
        onChange={e => onSearchInput(e)}
        value={searchQuery}
      />
    </div>
  );
};

export default Search;
