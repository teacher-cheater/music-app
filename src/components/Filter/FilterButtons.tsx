"use client";

import { useState } from "react";
import cls from "./filterButtons.module.css";
import { TrackType } from "@/sharedtypes/sharedTypes";
import FilterModal from "./FilterModal/FilterModal";
import { useAppDispatch, useAppSelector } from "@/store/store";
import {
  removeFilterAuthor,
  setFilterAuthor,
  setFilterGenre,
  setFilterYear,
} from "@/store/features/trackSlice";

type FilterType = "исполнителю" | "году выпуска" | "жанру";

const FILTER_TYPES: FilterType[] = ["исполнителю", "году выпуска", "жанру"];

const FilterButtons = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType | null>(null);
  const [filteredData, setFilteredData] = useState<TrackType[]>([]);
  const dispatch = useAppDispatch();
  const { allTracks } = useAppSelector(state => state.tracks);

  const { filters } = useAppSelector(state => state.tracks);
  console.log(filters.author);
  console.log(filters.year);

  const createFilterItem = (base: Partial<TrackType>): TrackType => ({
    _id: Number(Math.random().toString()),
    name: base.name || "Unknown",
    author: base.author || "Unknown",
    album: base.album || "",
    logo: base.logo || null,
    track_file: base.track_file || "",
    stared_user: base.stared_user || [],
    duration_in_seconds: base.duration_in_seconds || 0,
    release_date: base.release_date || "",
    genre: base.genre || [],
    ...base,
  });

  const filterStrategies: Record<FilterType, () => TrackType[]> = {
    исполнителю: () =>
      Array.from(new Set(allTracks.map(track => track.author))).map(author =>
        createFilterItem({
          name: author,
          author,
          release_date: "",
          genre: [],
        })
      ),
    "году выпуска": () =>
      Array.from(
        new Set(allTracks.map(track => track.release_date.split("-")[0]))
      ).map(year =>
        createFilterItem({
          name: year,
          author: year,
          release_date: year,
          genre: [],
        })
      ),
    жанру: () =>
      Array.from(new Set(allTracks.flatMap(track => track.genre))).map(genre =>
        createFilterItem({
          name: genre,
          author: genre,
          release_date: "",
          genre: [genre],
        })
      ),
  };

  const handleFilterClick = (filterType: FilterType) => {
    if (activeFilter === filterType) {
      setActiveFilter(null);
    } else {
      setActiveFilter(filterType);
      setFilteredData(filterStrategies[filterType]());
    }
  };

  const handleSelect = (value: string) => {
    switch (activeFilter) {
      case "исполнителю":
        if (filters.author.includes(value)) {
          dispatch(removeFilterAuthor(value));
        } else {
          dispatch(setFilterAuthor(value));
        }
        break;
      case "году выпуска":
        if (filters.year.includes(value)) {
          // Нужно добавить removeFilterYear в ваш slice
          dispatch(setFilterYear(value)); // Замените на removeFilterYear когда добавите
        } else {
          dispatch(setFilterYear(value));
        }
        break;
      case "жанру":
        if (filters.genre.includes(value)) {
          // Нужно добавить removeFilterGenre в ваш slice
          dispatch(setFilterGenre(value)); // Замените на removeFilterGenre когда добавите
        } else {
          dispatch(setFilterGenre(value));
        }
        break;
    }
  };

  const getFilterCount = (filterType: FilterType): number => {
    switch (filterType) {
      case "исполнителю":
        return filters.author.length;
      case "году выпуска":
        return filters.year.length;
      case "жанру":
        return filters.genre.length;
      default:
        return 0;
    }
  };

  return (
    <div className={cls.centerblock__filter}>
      <div className={cls.filter__title}>Искать по:</div>

      <div className={cls.filter__buttons_container}>
        {FILTER_TYPES.map(filterType => (
          <div key={filterType} className={cls.filter__button_wrapper}>
            <button
              type="button"
              onClick={() => handleFilterClick(filterType)}
              className={cls.filter__button}
              aria-expanded={activeFilter === filterType}
            >
              {filterType}
            </button>
            {getFilterCount(filterType) > 0 && (
              <span className={cls.filter__count}>
                {getFilterCount(filterType)}
              </span>
            )}
            {activeFilter === filterType && (
              <FilterModal
                currentFilter={activeFilter}
                filteredData={filteredData}
                onClose={() => setActiveFilter(null)}
                onSelect={handleSelect}
                selectedValues={
                  activeFilter === "исполнителю"
                    ? filters.author
                    : activeFilter === "году выпуска"
                    ? filters.year
                    : filters.genre
                }
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterButtons;
