"use client";

import { useState } from "react";
import cls from "./filterButtons.module.css";
import { TrackType } from "@/sharedtypes/sharedTypes";
import FilterModal from "./FilterModal/FilterModal";
import { useAppSelector } from "@/store/store";

type FilterType = "исполнителю" | "году выпуска" | "жанру";

const FILTER_TYPES: FilterType[] = ["исполнителю", "году выпуска", "жанру"];

const FilterButtons = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType | null>(null);
  const [filteredData, setFilteredData] = useState<TrackType[]>([]);

  const { allTracks } = useAppSelector(state => state.tracks);

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

            {activeFilter === filterType && (
              <FilterModal
                currentFilter={activeFilter}
                filteredData={filteredData}
                onClose={() => setActiveFilter(null)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterButtons;
