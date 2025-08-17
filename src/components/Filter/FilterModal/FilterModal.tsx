"use client";

import cls from "./filterModal.module.css";
import { TrackType } from "@/sharedtypes/sharedTypes";

interface FilterModalProps {
  currentFilter: string | null;
  filteredData: TrackType[];
  onClose: () => void;
  onSelect: (value: string) => void;
  selectedValues: string[];
}

const FilterModal = ({
  currentFilter,
  filteredData,
  onClose,
  onSelect,
  selectedValues,
}: FilterModalProps) => {
  const getValueToCompare = (item: TrackType) => {
    switch (currentFilter) {
      case "исполнителю":
        return item.author;
      case "году выпуска":
        return item.release_date.split("-")[0];
      case "жанру":
        return item.name;
      default:
        return "";
    }
  };

  return (
    <div className={cls.modalOverlay} onClick={onClose}>
      <div className={cls.filter__list} onClick={e => e.stopPropagation()}>
        <ul className={cls.modalList}>
          {filteredData.map(item => {
            const value = getValueToCompare(item);
            const isSelected = selectedValues.includes(value);

            return (
              <li
                key={item._id}
                className={`${cls.modalItem} ${
                  isSelected ? cls.modalItem_active : ""
                }`}
                onClick={() => onSelect(value)}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FilterModal;
