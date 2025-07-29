"use client";

import React from "react";
import cls from "./filterModal.module.css";
import { TrackType } from "@/sharedtypes/sharedTypes";

const FilterModal = ({
  currentFilter,
  filteredData,
  onClose,
}: {
  currentFilter: string | null;
  filteredData: TrackType[];
  onClose: () => void;
}) => {
  return (
    <div className={cls.modalOverlay} onClick={onClose}>
      <div className={cls.filter__list} onClick={e => e.stopPropagation()}>
        <div className={cls.modalList}>
          {filteredData.map(item => (
            <div key={item._id} className={cls.modalItem}>
              {currentFilter === "исполнителю" && <div>{item.author}</div>}
              {currentFilter === "году выпуска" && (
                <div>{item.release_date}</div>
              )}
              {currentFilter === "жанру" && <div>{item.genre[0]}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
